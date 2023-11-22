import express from 'express'
import cors from 'cors'
import connect from './Connection/Connection.js'
import model from './Model/model.js'



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/quiz', async(req,res)=>{
    // console.log(req.body)
    // const {question ,option} = req.body

    // const saved  = new model({
    //   question,
    //  option,


    // })
// console.log(saved)
    const datas = await model.find()

    res.status(200).send(datas)
    // await saved.save()
})

// app.get('/name', async (req, res) => {
//     res.status(200).send("priya")
// })

connect.then(() => {
    app.listen(4000, () => {
        console.log('app is running on 4000')
    })
})