import express from "express";

const app = express();

app.get("/",(request,response) => {
    return response.json({
        message:"vamos codar nlw",
    });
});

app.post("/users",(request,response) => {
return response.json({
    message:"estamos codando",
});
});



app.listen(8081, () =>  console.log('servidor rodando'));