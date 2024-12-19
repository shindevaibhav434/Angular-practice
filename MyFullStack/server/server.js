express = require('express');
eobj = express();
port = 1235;

// To handle CORS
// Cross Origin Resource Sharing
eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");

    next();
});

function starter()
{
	console.log("Server is started at port 1235");
}

eobj.listen(port,starter);

function Display(req,res)
{
	res.send("My First Server App is running ...");
}

eobj.get('/',Display);

function MyLogic(req,res)
{
	res.send("Hello from server");
}