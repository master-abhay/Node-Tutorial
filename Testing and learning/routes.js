const fs = require('fs');

const requestHandeler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send Data to server</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {

        const body = [];
        console.log(body);
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            //To show the Chunks:
            console.log(body);
            const parsedBody = Buffer.concat(body).toString();
            // To show the result of the message i.e. is coming from the form:
            // i.e. message=mywritten message, here key is name from input field.
            console.log("Printng the parsed result: " + parsedBody);
            const message = decodeURIComponent(parsedBody.split('=')[1].replace(/\+/g, ' '));
            console.log(message);
            fs.writeFileSync('messages.txt', message);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();

        });

    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>Hello from my Node.js Server</body>');
        res.write('</html>');
        res.end();
    }

};

module.exports = requestHandeler;