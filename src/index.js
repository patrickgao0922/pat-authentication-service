import mongoose from "mongoose"
import passport from "passport"
import LocalStrategy from "passport-local"
import express from "express"
import bodyParser from "body-parser"

import routes from "./routes"

var app = express()

// Config middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize())

// Load routes
app.use("/",routes)


// Config mongoose with mongodb settings
mongoose.connect("mongodb://localhost/pat_authentication")

app.listen(8080, ()=> {
	console.log("Start listening")
})

