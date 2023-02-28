const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.status(200).json("Welcome to our page!")
})
app.get("/add/:num1/:num2",(req,res)=>{
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const add = num1 + num2
    res.status(200).json("The sum of your numbers is "+ add)

})
app.get("/multiply/:num1/:num2",(req,res)=>{
    const num1= parseInt(req.params.num1);
    const num2 =parseInt(req.params.num2);
    const multiply =num1 * num2
    res.status(200).json("The product of your numbers is" + multiply)
})
app.get("/subtract/:num1/:num2",(req,res)=>{
    const num1= parseInt(req.params.num1);
    const num2 =parseInt(req.params.num2);
    const subtract =num1 - num2
    res.status(200).json("The difference between your numbers is " + subtract)
})
app.get("/divide/:num1/:num2",(req,res)=>{
    const num1= parseInt(req.params.num1);
    const num2 =parseInt(req.params.num2);
    const divide =num1 / num2
    res.status(200).json("The quotient of your numbers is "+ divide)
})
app.listen(3000,()=>{
    
})
