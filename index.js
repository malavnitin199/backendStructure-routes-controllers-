const express = require("express");
const app = express(); 

const PORT = 8082;
const {starter} = require("./Controller/currency");

const currencyRouter = require('./router/currency.route')
const userRouter =require("./router/user.route")
app.get("/",starter)
app.use("/currency",currencyRouter)
app.use("/user",userRouter)
 

app.listen(PORT,()=>{
    console.log("listening to the port 8082...")
})

