require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

// middleware
app.use(bodyParser.json())
app.use(cors())

// connect to mongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnofoedTopology:true})
    .then(()=>console.log("connected to mongoDB on localhost"))
    .catch((err)=>console.error("mongoDB connection error:", err))

// routes
const authRoutes = require("./Routes/auth")
app.use("/api/auth", authRoutes)