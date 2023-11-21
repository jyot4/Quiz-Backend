import mongoose from "mongoose";
import { config } from 'dotenv'


config()
const connect = mongoose.connect(
   process.env.SCRECT_KEY 
)

export default connect