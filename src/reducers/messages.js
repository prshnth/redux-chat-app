import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/action-types';
import _ from 'lodash';

export default (state = getMessages(10), action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const { userId, message, editing } = action.payload;
            const userMessages = state[userId];
            const number = editing ? _.lastIndexOf(_.keys(userMessages)) - 1 : +_.keys(userMessages).pop() + 1;
            return {
                ...state,
                [userId]: {
                    ...userMessages,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        default:
            return state;
    }
};