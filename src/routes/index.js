import express from "express"
import passport from "passport"
import Account from "../models/account"

var router = express.Router()
router.get("/test",(req,res) => {
	res.send("get")
})


router.post("/register", (req, res) => {
	Account.register(new Account({username: req.body.username}),req.body.password ,(err,account)=>{
		if (err) {
			console.log(req.body)
			console.log(err)
			return res.send("Error while creating a new account")
		}
		passport.authenticate("local")(req, res, () => {
			res.send("Done")
		})
	})
})

export default router