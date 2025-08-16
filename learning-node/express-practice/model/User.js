import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number
    }
})
const User = mongoose.model("User",UserSchema)
export default User