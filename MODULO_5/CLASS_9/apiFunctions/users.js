import {readFile, writeFile} from "fs/promises";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

const SECRET_KEY = "mysecrettoken";

export const createUser = async(req, res) => {
    const {user, password} = req.body;
    const users = await readFile('users.json');
    const usersArray = JSON.parse(users);

    //Se valida que se ingresen los datos correctos
    if(!user || !password) return res.status(403)
        .json({message: 'User and password are required'});

    //Se valida que el usuario no exista para no duplicarlo
    const isUser = usersArray.some(userItem => userItem.user === user)
    if(isUser) return res.status(409)        
        .json({error: 'User already exists'})
    
    //Se hashea la contraseña por estandar de seguridad
    const hashedPass = await bcrypt.hash(password, 10) // El 10 significa el número de ofuscaciones que realiza en el hasheo
    const newUser = {user, password : hashedPass}
    usersArray.push(newUser);
    await writeFile('users.json', JSON.stringify(usersArray));
    res.status(200).json({message: 'User created succesfully'})
}

export const userLogin = async(req, res) =>{
    const {user, password} = req.body;

    //Se valida que se ingresen los datos correctos
    if(!user || !password) return res.status(403)
        .json({message: 'User and password are required'});    
    
    //Se valida que el usuario exista
    const users = await readFile('users.json');
    const userArray = JSON.parse(users);
    const foundUser = userArray.find(userItem => userItem.user === user);
    if(!foundUser) return res.status(403)
        .json({message: 'Invalid credentials'})

    //Valida que la contraseña sea correcta
    const isTrue = await bcrypt.compare(password, foundUser.password)
    if(!isTrue) return res.status(403)
        .json({message:'Invalid credentials'})

    //Se genera el jwt para autenticar la api en los métodos post, put y delete
    const token = jwt.sign({
        user: foundUser.user
    }, SECRET_KEY, {expiresIn: '24h'})
    console.log(token)
    
    res.status(200).json({message: "Login successful",
                          data:{user: foundUser.user,
                                token:token                                  
                          }  
    })
}