// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const tf = require('@tensorflow/tfjs-node')
const qna = require('@tensorflow-models/qna')

export default async function handler(req, res) {

  const samplePassage = "The only thing we can say for sure is that nlogn algorithm outperforms n^2 algorithm for sufficiently large n. In practice, all nlogn algorithms have low enough multipliers that n2 algorithm can be quicker only for very small n (and for very small n, it usually doesn't matter what algorithm is used)."
  const defaultModelAnswer = "Sorry, I couldn't answer your question"
  const model = await qna.load()
  
  async function useModel() {
    const answers = await model.findAnswers(req.body, samplePassage)

    if(answers.length > 0){
      let modelAnswer = JSON.stringify(answers[0].text)
      res.status(200).json({answer: modelAnswer})
    }
    else {res.status(200).json({answer: defaultModelAnswer})}
  }

  if(req.method === 'POST'){
    useModel()
  }
  else{res.status(404)}
}
