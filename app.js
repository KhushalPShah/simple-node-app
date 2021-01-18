const express = require('express');
// const mongo = require('mongodb');
// const mongoClient = require('mongodb').MongoClient;
// const mongoURL = "mongodb://localhost:27017/";
var dbo;
var bodyParser = require("body-parser");
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send("Hello World!");
})

// app.post("/addtodo", (req,res) => {
//     dbo.collection("todos").insertOne({"title" : req.body.title}, (err, res) => {
//         if (err) throw err;
//         console.log("New todo added");
//     })
//     res.status(200).end();
// })

// app.get("/gettodo", (req,res) => {
//     dbo.collection("todos").find().toArray((err, todos) => {
//         if (err) throw err;
//         console.log("All todos retrieved");
//         responseObj = []
//         for(i = 0; i < todos.length; i++) {
//             responseObj.push(todos[i].title);
//         }
//         res.end(JSON.stringify(responseObj));
//     })
// })

app.get("/",(req,res) => {
    res.end("Test Route!");
})

// mongoClient.connect(mongoURL, {poolSize : 10}, (err, db) => {
//     if (err) throw err;
//     console.log("Connected to MongoDB");
//     dbo = db.db("app");
//     dbo.listCollections({name : "todos"})
//         .next( (err, collInfo) => {
//             if(collInfo) {
//                 console.log("Collection - Todos exists!");
//             }
//             else {
//                 dbo.createCollection("todos", (err, res) => {
//                     if(err) throw err;
//                     console.log("Collection - Todos Created");
//                 })
//             }
//     })
// })


app.listen(port, () => {
    console.log('Simple Hello World App running on port : ' + port);
})

