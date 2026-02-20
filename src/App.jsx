import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import './App.css'

function App() {
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      } 
    });
  },[])



  const [ chatMessages, setChatMessages ] = useState(
    JSON.parse(localStorage.getItem('messages'))  || []
  )
  // const [ chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  },[chatMessages])

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
        welcome to the chatbot project! Send a message using the the textbox below.
      </p>
      )}
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
