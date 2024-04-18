const url = require('url');
const http = require('http');
const fs = require('fs');

const port = 1705;

const server = http.createServer((req, res) => {

    //request//
    //index//
    //about//
    //services//

    const path = req.url
    if (path == "/about") {
        console.log("about page")
    } else if (path == "/") {
        console.log("home page")
    }
    else if (path == "/services") {
        console.log("services page")
    }


});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
