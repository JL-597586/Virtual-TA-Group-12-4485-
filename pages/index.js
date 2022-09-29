import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [chat, setChat] = useState([])

  const ChatList = () => {
    
    //re-render chat on update
    useEffect(()=>{
      console.log("render list")
    },[chat])

    const listItems = chat.map((chat) =>
      <ul key={chat.id}>
        <p>{chat.text}</p>
      </ul>
    )
    return(<div>{listItems}</div>)
  }

  /*
  -> add Question to chat
  -> POST Question
  -> add API response to chat
  */
  async function apiCall() {
    let question = "why does nlogn outperform n^2"

    setChat(chat => [...chat, {text: question,id: chat.length+1}])
    console.log("API req")

      fetch('/api/TA', 
      {
        method: 'post',
        headers: {'Content-Type':'application.json'},
        body: JSON.stringify(question)
      }
      )
      .then((response) => response.json())
      .then((data) => (
        setChat(chat => [...chat, {text: data.answer,id: chat.length+1}]))
      )  
}

  return (
    <div>
      <Head>
        <title>UTD TA Chat</title>
        <meta name="description" content="UTD TA Chat Bot Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div><ChatList/></div>
        <button onClick={apiCall} >Call API</button>
      </main>

      <footer>
      </footer>
    </div>
  )
}
