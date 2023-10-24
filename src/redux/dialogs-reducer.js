const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messageData: [...state.messageData, {id: 9, message: newMessage}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => ({ type: 'ADD-MESSAGE', newMessageText })

export default dialogsReducer;