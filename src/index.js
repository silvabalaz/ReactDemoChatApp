import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
const DUMMY_DATA = [
    {
        senderId: "silva",
        text: "Tko još uči React?"
    },
    {
        senderId: "ivana",
        text: "Ja!"
    },
    {
        senderId: "darko",
        text: "I ja bi!?"
    }
    ]
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

class App extends React.Component{

    constructor(){
        super()
        this.state = { messages : DUMMY_DATA }

    }
    render() {
        return (
            <div className="app">
                <MessageList messages = {this.state.messages} />
                <SendMessageForm />
            </div>
        )
    }

}