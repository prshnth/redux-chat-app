import { EDIT_MESSAGE, SEND_MESSAGE } from '../constants/action-types';

export default (state = false, action) => {
    switch (action.type) {
        case EDIT_MESSAGE:
            return true;
        case SEND_MESSAGE:
            return false;
        default:
            return state;
    }
};