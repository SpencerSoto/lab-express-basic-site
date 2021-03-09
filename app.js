const express = require('express');

const app = express();

//make everything inside public available for use
app.use(express.static("public"));

app.get("/", (request, response)=>{
    console.log(request);
    response.sendFile("index.html");
});

app.get("/home", (request, response) => {
    response.send("this is a home page!");
});

app.get("/about", (request, response) => {
    response.send("this is an about page!");
});

app.listen(3000, () => {
    console.log(`Server listening on port 3000!`);
});