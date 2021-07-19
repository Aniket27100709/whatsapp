import React from 'react';
import "./Chat.css";
import {Avatar,IconButton} from '@material-ui/core';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useState} from "react";
import axios from './axios';
function Chat ({messages}) {
    const [input,setInput]=useState("");
    const sendMessage=async(e)=>{
        e.preventDefault();
        await axios.post('/messages/new',{
            message:input,
            name:"Ani",
            timestamp:"Just Now",
            received:false,
        });
    };
    return (
        <div className="chat">
           <div className="chat__header">
               <Avatar src="https://image.freepik.com/free-vector/code-logo-template-gradient-design_23-2148810395.jpg"/>
               <div className="chat__headerinfo">
                      <h3>The TrailBlazers</h3>
                      <p>Last seen at...</p>
               </div>
               <div className="chat__headerRight">
                      <IconButton>
                          <SearchOutlined/>
                      </IconButton>
                      <IconButton>
                          <AttachFile/>
                      </IconButton>
                      <IconButton>
                          <MoreVert/>
                      </IconButton>
               </div>
           </div>
           <div className="chat__body">
           {messages.map((message)=>(
               <p className={`chat__message ${message.received && "chat__reciever"}`}>
                <span className="chat__name">{message.name}</span>
                    {message.message}

                <span className="chat__timestamp">
                    {message.timestamp}
                </span>

               </p>
           ))}
               
           </div>
           <div className="chat__footer">
               <InsertEmoticonIcon/>
               <form>
                    <input 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"/>
                    <button onClick={sendMessage} type="submit">Send a Message </button>
               </form>
               <MicIcon/>
           </div>
        </div>
    )
}

export default Chat
