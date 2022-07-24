import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likes: '3' },
        { id: 2, message: 'It\'s my first post', likes: '12' }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postsData: [ ...state.postsData, {id: 3, message: newPost, likesCount: 0}]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile: profile })

export const getUserProfile = (userId) => (dispatch) =>{ 
    usersAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
    })};




export default profileReducer;