import http from 'http';
import url from 'url';
import fs from 'fs/promises';

//Se crea el servidor
const server = http.createServer(async (req, res) => {
    const parseUrl = url.parse(req.url);
    const method = req.method;

    //Se validan los endpoints y los métodos
    if(parseUrl.path === '/product' && method === 'GET'){
        const products = await fs.readFile('./products.json', 'utf-8'); //Se lee el archivo products.json                      

        res.writeHead(200, {'content-type': 'application/json'});
        res.end(products);      
    }else if(parseUrl.path === '/products' && method === 'POST'){
        const products = await fs.readFile('./products.json', 'utf-8'); //Se lee el archivo products.json
        const productsJson = JSON.parse(products); //Se convierte a JSON

        //Se actualiza el archivo products.json con el nuevo dato recibido en el body
        let body = '';
        req.on('data',(chunk) => body += chunk);
        req.on('end', () => {
            const product = JSON.parse(body);
            productsJson.push(product);
            fs.writeFile('./products.json', JSON.stringify(productsJson))
            res.writeHead(201, {'content-type': 'text/plain'});
            res.end('Product added');            
        });

    }else{
        res.writeHead(404, {'content-type': 'text/plain'}); //Responde un 404 si no se encuentra el endpoint
        res.end('Not found');
    }
    
});

server.listen(3002, () => console.log('Server running on port 3002'));
