const http = require("http");

const hostname = "127.0.0.1";
const port = 7000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {

        res.end(`
<!DOCTYPE html>
<html>
<head>
<title>Login Page</title>

<style>

body{
    font-family:Arial;
    background:#f2f2f2;
}

.login{
    width:350px;
    margin:100px auto;
    background:white;
    padding:25px;
    border-radius:10px;
    box-shadow:0px 0px 10px gray;
    text-align:center;
}

input{
    width:90%;
    padding:10px;
    margin:10px;
    font-size:16px;
}

button{
    width:95%;
    padding:10px;
    background:#0078d7;
    color:white;
    border:none;
    font-size:18px;
    cursor:pointer;
}

button:hover{
    background:#0056a3;
}

</style>

</head>

<body>

<div class="login">

<h2>Login Page</h2>

<input type="text" placeholder="Enter Username"><br>

<input type="password" placeholder="Enter Password"><br>

<a href="/home">
<button>Login</button>
</a>

</div>

</body>
</html>
`);

    }

    else if (req.url === "/home") {

        res.end(`
<!DOCTYPE html>
<html>

<head>

<title>Home Page</title>

<style>

body{
    margin:0;
    font-family:Arial;
    background:#eef2f3;
}

.header{
    background:#0078d7;
    color:white;
    text-align:center;
    padding:20px;
}

.menu{
    background:#333;
    padding:15px;
    text-align:center;
}

.menu a{
    color:white;
    text-decoration:none;
    margin:20px;
    font-size:18px;
}

.menu a:hover{
    color:yellow;
}

.content{
    width:80%;
    margin:30px auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0px 0px 10px gray;
    text-align:center;
}

.footer{
    background:#222;
    color:white;
    text-align:center;
    padding:15px;
    margin-top:30px;
}

</style>

</head>

<body>

<div class="header">

<h1>My First Node.js Website</h1>

</div>

<div class="menu">

<a href="/home">Home</a>

<a href="/">Logout</a>

</div>

<div class="content">

<h2>Welcome</h2>

<p>
This is Home Page created using Node.js HTTP Server.
</p>

<h3>Hello Brij Kishor Shukla</h3>

<button onclick="showMessage()">
Click Here
</button>

</div>

<div class="footer">

Copyright © 2026

</div>

<script>

function showMessage(){

alert("Welcome to Node.js Website");

}

</script>

</body>

</html>
`);

    }

    else {

        res.end(`
<h1 style="text-align:center;">404 Page Not Found</h1>
`);
    }

});

server.listen(port, hostname, () => {

    console.log("Server Started Successfully");
    console.log("http://" + hostname + ":" + port);

});