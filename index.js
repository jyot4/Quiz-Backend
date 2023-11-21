import express from 'express'
import cors from 'cors'
import connect from './Connection/Connection.js'
import model from './Model/model.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({origin: 'http://localhost:3000/question'}))

app.post('/quiz', async(req,res)=>{
    console.log(req.body)
    const {paragraph ,button} = req.body

    const saved  = new model({
        paragraph ,button
    })
    res.status(200).send("quiz added")
    await saved.save()
})

connect.then(()=>{
app.listen(4000,()=>{
    console.log('app is running on 4000')
})
})