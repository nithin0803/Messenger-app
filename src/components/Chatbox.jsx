import { Card, CardContent, Typography } from '@material-ui/core'
import React,{ forwardRef } from 'react';
const Chatbox= forwardRef(({message,username}, ref) => {
const isUser= username===message.username;

    return (
        <div ref={ref} className={`message ${isUser && `message_user`}`}>
        <Card className={isUser ? "message_usercard" : "message_guestcard"}>
        <CardContent>
        <Typography
        color="white"
        variant="h5"
        component="h2"
        >
            {!isUser && `${message.username || "unknown user"}: `} {message.messages}  
        </Typography>
        </CardContent>
        </Card>
            
        </div>
    )
})

export default Chatbox
