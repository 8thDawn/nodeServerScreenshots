const http = require('http');

const server = http.createServer(function(req, res){

    // res.writeHead(200, {'content-type': 'text/plain'});
    // res.writeHead(200, {'content-type': 'application/json'});
    res.writeHead(200,{'content-type': 'text/html'} )

    // res.end('Welcome to Zuri Internship');
    // res.end(`
    //     {
    //         "name" : "Evans",
    //         "country" : "Ghana",
    //         "hobby" : "reading fiction"
    //     }
    // `);

    res.end(`
    <html>
        <body style= "background: black; color: white; text-align: center; padding: 300; font-weight: 600; line-spacing: 1.9; font-size: 25px;">
            
            <h1>Welcome to Zuri Internship</h1>
            <p>We demand utmost commitment and discipline.</p>
        </body>
    </html>
    `);
});

server.listen(4000, 'localhost');
console.log("Server created successfully!");