const http  = require('http');




const requestListener = function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET',
    
      };
    
    res.writeHead(200,headers);
    res.end('TALENT PLUS');
  }

const server = http.createServer(requestListener);


server.us
server.listen(3001,()=>{
    console.log(`server running on 3001`)
});