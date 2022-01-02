import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import firebase from 'firebase/app'
import { auth } from '../firebase'
import 'firebase/app'

const Login = () =>
{
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Wellcome to ChatChit</h2>
                <div className="login-button google"
                    onClick={ () => auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider() ) }
                >
                    <GoogleOutlined />Sign Wth Google
                </div>
                <br /><br />
                <div className='login-button facebook'
                    onClick={ () => auth.signInWithRedirect( new firebase.auth.FacebookAuthProvider() ) }
                >
                    <FacebookOutlined /> Sign with FB
                </div>
            </div>
        </div>
    )
}

export default Login
