import * as Types from '../constants/ActionTypes';
import * as messages from '../constants/Messages';

var initialState = messages.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default:
            return [...state];
    }
}

export default message;