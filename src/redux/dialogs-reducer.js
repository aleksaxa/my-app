const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 9,
                message: state.newMessageText,
            };

            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessg;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageTextActionCreator = (messg) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessg: messg})

export default dialogsReducer;