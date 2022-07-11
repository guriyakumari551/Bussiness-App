import React from 'react'
import {StreamChat }from'stream-chat'
import {Chat} from 'stream-chat-react'
import  Cookies from 'universal-cookie'
import './App.css'
import { ChannelContainer,ChannelListContainer,Auth } from './components'

const cookies=new Cookies()
const apiKey='jreyrvaaapf4'
const authToken=cookies.get("token")

//it means that if the authtoken is successfully created than connect the user with the application
const client=StreamChat.getInstance(apiKey);
if(authToken){
  client.connectUser({
            id:cookies.get('userId'),
            name:cookies.get('username'),
           fullName:cookies.get('fullName'),
           image:cookies.get('avatarURL'), 
           token:cookies.get('token'),
           hashedPassword:cookies.get('hashedPassword'),
           phoneNumber:cookies.get('phoneNumber'),
           
           
    
  },authToken)
}

const App= ()=> {
  if(!authToken)return <Auth />
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">
      <ChannelListContainer

      />

      <ChannelContainer

      />
      </Chat>

    </div>
  )
}

export default App