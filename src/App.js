import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import {useEffect,useState} from 'react';
import axios from './axios';

function App() {

const [messages,setMessages]=useState([]);

useEffect(()=>{
  axios.get("/messages/sync").then(response=>{
   console.log(response.data);
   setMessages(response.data);
  });
},[]);
  //useEffect runs a piece of code when apps load
  useEffect(()=>{
    var pusher = new Pusher('3d4fa382a13852000f17', {
      cluster: 'ap2'
    });
    var channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage)=> {
      setMessages([...messages,newMessage]);
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);
  console.log(messages);
  return (
    <div className="App">
      <div className="App__body">
      <Sidebar/>
       <Chat messages={messages}/>
      </div>
    </div>
   
  );
}

export default App;
