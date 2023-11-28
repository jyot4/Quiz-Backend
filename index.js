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


  async  function checkAnswer (questionsId, userSelectedAnswer){
const  ques = await model.findById(questionsId)
if(!ques){
    return "question not found"
}
console.log(ques)


//compare the user selected answer  with the correct answer

const correctAnswer = ques.answer

// consolelog(correctAnswer)
    }
})

//..........................check correct answer....................


//get a single quiz

// app.get('/quiz/:id',async(req,res)=>{
//     const singleQuiz = await model.findById(req.params.id);
//     res.send(singleQuiz)
// console.log(singleQuiz)
// })

connect.then(() => {
    app.listen(4000, () => {
        console.log('app is running on 4000')
    })
})