import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import "./styles.css";
// Set the backend location
const ENDPOINT = "http://localhost:8080/ws";

const LiveChat=()=>{
  // const [userName, setuserName] = useState();
  const [stompClient, setStompClient] = useState(null);
  const [msgToSend, setSendMessage] = useState("");
  const [messages, setMessages] = useState([
  ]);


  useEffect(() => {
    // use SockJS as the websocket client
    const socket = SockJS(ENDPOINT);
    // Set stomp to use websockets
    const stompClient = Stomp.over(socket);
    // connect to the backend
    stompClient.connect({}, () => {
      // subscribe to the backend
      stompClient.subscribe('/topic/message', (data) => {
        //console.log(data);
        onMessageReceived(data);
      });
    });
    // maintain the client for sending and receiving
    setStompClient(stompClient);
    
  }, []);
  useEffect(() => {
    if(messages.length>=2){
    let item = messages[messages.length-1];
    let item2 = messages[messages.length-2];
    if(item.date==item2.date ){
      setMessages((previousArr) => (previousArr.slice(0, -1)))
    }
    }
      });
  // send the data using Stomp
  function sendMessage() {
    stompClient.send("/app/chat", {}, JSON.stringify({'userName': JSON.parse(localStorage.getItem('user')), 'message': msgToSend}));
    setSendMessage("")
   };

  // display the received data
  function onMessageReceived(data)
  {
    const result=  JSON.parse(data.body);
    let item = messages[messages.length-1];
     setMessages(oldArray => [...oldArray, result]);
     console.log(messages[messages.length-1])
    
  };
  useEffect(() => {
    var objDiv = document.getElementById("314");
    objDiv.scrollTop = objDiv.scrollHeight;

  });
  const chatBox =(userName,text,date)=> (
    <div className="item">
                <div className="icon">
                    <i className="fa fa-user">{userName.charAt(0).toUpperCase()}</i>
                </div>
                <div className="msg">
                    <p style={{marginBottom:0,wordBreak:"break-all"}}>{text}</p>
                    <p style={{fontSize:" 12px",margin:0,paddingTop:0,float:'right'}}>{userName} -- {date}</p>
                </div>               
            </div>
    
          
);
const chatBoxMe =(message,date)=> (
  <div className="item right">
                <div className="msg">
                <p style={{marginBottom:0,wordBreak:"break-all"}}>{message}</p>
                    <p style={{fontSize:" 12px",margin:0,paddingTop:0,float:'left'}}>{date}</p>
                </div>
            </div>
        
);
    
    return( 

    <div className='cb'>
    <div className="wrapper">
        <div className="title">Live Chat Service</div>
        <div className="box" id="314">
            
        {messages.map((message)=> <div key ={ Math.random()}>{message.userName==JSON.parse(localStorage.getItem('user'))?
        chatBoxMe(message.message,message.date):chatBox(message.userName,message.message,message.date)}</div>)}
            
            
        </div>
        
        <div className="typing-area">
            <div className="input-field">
                <input type="text" value={msgToSend} placeholder="Type your message" 
                onChange={(event) => setSendMessage(event.target.value)} required ></input>
                <button onClick={sendMessage} >Send</button>
            </div>
        </div>
    </div>
    </div>

    );    
}
export default LiveChat;


