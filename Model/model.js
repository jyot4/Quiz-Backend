import mongoose from "mongoose";


const scheme = new mongoose.Schema({
question:{
  type: String  
},
option:{
    type:Array
},
answer:{
  type:String
}


})

const data  = mongoose.model('questions' , scheme)
export default data