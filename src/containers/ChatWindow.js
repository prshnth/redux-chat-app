import React from 'react';
import './ChatWindow.css';
import Header from '../components/Header';
import Chats from '../components/Chats';
import store from '../store';
import _ from 'lodash';
import MessageInput from './MessageInput';

const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const messages = _.values(state.messages[activeUserId]);
    const {typing} = state;
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={messages} />
            <MessageInput typeInput={typing} />
        </div>
    );
};

export default ChatWindow;