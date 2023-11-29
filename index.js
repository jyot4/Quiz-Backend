import express from 'express'
import cors from 'cors'
import connect from './Connection/Connection.js'
import model from './Model/model.js'



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cors({ origin: 'http://localhost:3000' }))

app.use(cors({ origin: 'https://quiz-frontend-6yil.onrender.com' }))

app.get('/quiz', async(req,res)=>{
    
    const datas = await model.find()

    res.status(200).send(datas)
})


connect.then(() => {
    app.listen(4000, () => {
        console.log('app is running on 4000')
    })
})