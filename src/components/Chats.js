import React, { Component } from 'react';
import './Chats.css';
import store from '../store';
import { setTypingValue, editMessage } from '../actions';

const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    const handleEdit = () => {
        store.dispatch(setTypingValue(text));
        store.dispatch(editMessage());
    };
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} onClick={handleEdit}>
            {text}
        </span>
    );
};

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatRef = React.createRef();
    }

    scrollToBottom = () => {
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="Chats" ref={this.chatRef} >
                {this.props.messages.map(message =>
                    <Chat message={message} key={message.number} />
                )}
            </div>
        );
    };
};

export default Chats;