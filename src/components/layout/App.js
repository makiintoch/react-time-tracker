import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import './App.css'
import firebase from 'firebase';

class App extends Component {
    render() {
        {
            console.log(firebase.auth().currentUser)
        }
        return (
            <div className={'app'}>
                <Sidebar />
                <Content />
            </div>
        )
    }
}

export default App