import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as ReactDOM from "react-dom";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


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
                    <Title />
                    <MessageList messages={this.state.messages}/>
                </div>

        )
    }

}
function Title() {
    return <p className="title">Silvin demo chat</p>
}
class MessageList extends React.Component {
    render() {
        return (
        <ul className="message-list">
            {this.props.messages.map(message => {
                return (
                    <li key={message.id}>
                        <div>
                            {message.senderId}
                        </div>
                        <div>
                            {message.text}
                        </div>
                    </li>
                )
            })}
        </ul>
        )

    } }

ReactDOM.render(<App />, document.getElementById('root'));