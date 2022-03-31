const http = require("http"); // const http is a variable and http inside require is the hyper text markup protocol...
const fs = require("fs");

//Creating the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //Set header content type
    res.setHeader("Content-Type", "text/html");

    //Leting the path
    let path = "./views/";
    //Using the switch to return desired html pages...
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200; // giving the statuscode to the browser to know what is happening
            /*NOte: STATUS CODES
   200 - OK
   301 - Resources is moved
   404 - Not found
   500 - Internal Sever error*/
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;

            //To redirect the url...
        case "/about-me":
            res.statusCode = 301; // 301 is given when the file is moved...
            res.setHeader("Location", "/about"); // For redirecting about-me into /about html page...
            res.end(); // Ending the response...
            break;
        default:
            path += "404.html";
            res.statusCode = 404; // 404 is given for the not found
            break;
    }

    //Send an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end(); // to end the if
        } else {
            res.write(data);

            res.end(); // to end the else here
        }
    });
});

//Creating the function which works when localhost in 3000 port is accessed via browser and concole.log is shown in terminal or console of browser...
server.listen(3000, "localhost", () => {
    console.log("Listening for the requests on port 3000...");
});