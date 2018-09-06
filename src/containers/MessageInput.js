import React from 'react';
import './MessageInput.css';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';


const MessageInput = ({typeInput}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { activeUserId, typing, editing} = store.getState();
        store.dispatch(sendMessage(activeUserId, typing, editing));
    };

    const handleChange = (e) => {
        store.dispatch(setTypingValue(e.target.value));
    };

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                placeholder="Write a message"
                value={typeInput}
                onChange={handleChange}
            />
        </form>
    );
};

export default MessageInput