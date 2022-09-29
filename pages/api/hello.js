// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const tf = require('@tensorflow/tfjs-node-gpu')
const qna = require('@tensorflow-models/qna')

export default async function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
