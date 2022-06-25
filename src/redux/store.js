import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newPostText: ''
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
            newMessageText: ''
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state);
    }
}

export default store;
window.store = store;