const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const usersModel = require('./models/users')

const app = express()
app.use(express.json())
app.use (cors())

mongoose.connect("********************************************");

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    usersModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req,res)=>{
    usersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(2229,()=>{
    console.log("server is running")
})
