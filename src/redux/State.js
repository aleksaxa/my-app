const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likes: '3' },
                { id: 2, message: 'It\'s my first post', likes: '12' },
                { id: 3, message: 'I like React JS', likes: '11' },
                { id: 1, message: 'Don\'t wory', likes: '9' },
                { id: 2, message: 'Good like', likes: '6' },
                { id: 3, message: 'This is SUPER', likes: '1' }
            ],
            newPostText: 'Введите текст поста'
        },
        messagePage: {
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
            newMessageText: 'Введите ваше сообщение'
        }
    },
    _callSubscribe() {
        console.log('State update')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 9,
                message: this._state.messagePage.newMessageText,
            };

            this._state.messagePage.messageData.push(newMessage);
            this._state.messagePage.newMessageText = '';
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagePage.newMessageText = action.newText;
            this._callSubscribe(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageTextActionCreator = (messg) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: messg})



export default store;
window.store = store;