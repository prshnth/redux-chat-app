import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from '../constants/action-types';

export const setActiveUserId = id => {
    return {
        type: SET_ACTIVE_USER_ID,
        payload: id
    };
};

export const setTypingValue = value => {
    return {
        type: SET_TYPING_VALUE,
        payload: value
    };
};

export const sendMessage = (userId, message, editing) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            message,
            userId,
            editing
        }
    };
};

export const editMessage = () => {
    return {
        type: EDIT_MESSAGE,
        payload: true
    };
};

export const deleteMessage = (number) => {
    return {
        type: DELETE_MESSAGE,
        payload: number
    };
}