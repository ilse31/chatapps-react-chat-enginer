import React from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

const Chats = () =>
{
    const history = useHistory()
    const handleLogout = async () =>
    {

        await auth.signOut();
        history.push( '/' )
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    ChitChat
                </div>
                <div onClick={ handleLogout } className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height='calc(100vh-66px)'
                projectID='d0605fe1-928f-46d4-9475-b67ff67268b5'
                userName='.'
                userSecret='.'
            />
        </div>
    )
}

export default Chats
