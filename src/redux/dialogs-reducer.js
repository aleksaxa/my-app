const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Ksusha' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Sergey' },
        { id: 5, name: 'Natasha' },
        { id: 6, name: 'Dimych' },
        { id: 7, name: 'Victoriya' }
    ],
    messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi hi' },
        { id: 3, message: 'Hello my friend' },
        { id: 4, message: 'How do you do?' },
        { id: 5, message: 'You are is OK?' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessg
            }
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, {id: 9, message: newMessage}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })
export const updateNewMessageTextActionCreator = (messg) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessg: messg })

export default dialogsReducer;