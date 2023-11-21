import mongoose from "mongoose";


const scheme = new mongoose.Schema({
paragraph:{
  type: String  
},
button:{
    type:String
}

})

const data  = mongoose.model('questions' , scheme)
export default data