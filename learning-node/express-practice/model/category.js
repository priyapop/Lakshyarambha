import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        unique:true
    },
    description:{
        type:String,
        
    }
    
},{timestamps: true})
const Category = mongoose.model("category",CategorySchema)
export default Category