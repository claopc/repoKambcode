import jwt from 'jsonwebtoken';

export const authMiddelware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
 
    //Se valida que el token esté informado
    if(!token) return res.status(403).json({error: 'No se ha enviado el token de autenticación'});

    try {
        const decoded = jwt.verify(token, 'mysecrettoken')
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error)
        res.status(403).json({message: 'Ivalid token'})       
    } 
}