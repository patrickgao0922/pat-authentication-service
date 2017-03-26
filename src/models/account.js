import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"

var Schema = mongoose.Schema

var Account = new Schema({
	username: String,
	passport: String
})

Account.plugin(passportLocalMongoose)

export default mongoose.model("Account", Account)