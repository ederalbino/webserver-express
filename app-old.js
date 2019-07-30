const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':"application/json"})
    let salida = {
        nombre:"eder",
        edad:"24",
        url:req.url
    } 
    res.write(JSON.stringify(salida));
    res.end();

}).listen(8088);


console.log("Escuchando el 8088");