const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('We an in about')
    }
    res.end(`<h1> Oops! Sorry </h1>
    <p1> We dont have this page for now  </p1> <br>
    <a href="/"> Back To Home </a>
    `)
})
server.listen(5000)