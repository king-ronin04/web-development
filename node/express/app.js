// const express=require('express')

// //ger(read)  put(update) post(write) delete
// const app=express()
// // app.get(route,calllback)
// app.get("/",(req,res)=>{
//     res.send("Welcome to Express")
// })
// app.get("/feedback",(req,res)=>{
//     res.send("Welcome to Feedback")
// })
// app.get("/about",(req,res)=>{
//     res.send("Welcome to about")
// })

// app.listen(8000,()=>{
//     console.log("listening to port")
// })

const express=require('express')

const app=express()

app.get("/",(req,res)=>{
    res.write("<h1>Welcome to </h1>")
    res.write("<h1>express html content </h1>")
    res.send()//closing connection

})

//passing json content 
app.get("/new",(req,res)=>{
    res.send({
        nam:"abcd",
        section:"km032"
    })
})

app.listen(4000,()=>{
    console.log("listening to port")
})

