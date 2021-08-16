import React,{useState,useEffect} from 'react';
import Chatbox from './Chatbox';
import { FormControl,InputLabel,Input } from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import './App.css';




function Messanger() {
    const[input,setInput]=useState('');
    const [messages,setMessages]=useState([{username:'Nithin', messages:'Hello Aliens'}])
    const [username,setUsername]=useState('')
    

    useEffect(()=>{
        db.collection("messages")
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id:doc.id, messages: doc.data( )})))
        })
    },[])

    useEffect(()=>{
        setUsername(prompt("please enter your username"))
    },[])


    const sendMessage=(event)=>{
        event.preventDefault();
        db.collection('messages').add({
            messages:input,
            username:username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        setMessages([...messages,{username:username,messages:input}])
        setInput('');
    }
    

    return (
    <div className= "app" >
        <form className="app__form" >
        <FormControl className="app__formcontrol">
            <InputLabel >Enter a message</InputLabel>
            <Input className="form__input" type="text" value={input} onChange={e=>setInput(e.target.value)} aria-describedby="my-helper-text" />
            <IconButton className="form__button" variant="contained" color="primary" disabled={!input} type="submit" onClick={sendMessage} ><SendIcon/></IconButton>
            
        </FormControl>
        </form>

        <FlipMove>
        { messages.map(({id,messages})=>(
            <Chatbox key={id} username={username} message={messages}/>
        ))
        }
        </FlipMove>
    </div>
    );
}

export default Messanger;
