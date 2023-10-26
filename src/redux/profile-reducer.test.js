import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer"


let state = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likes: '3' },
        { id: 2, message: 'It\'s my first post', likes: '12' },
        { id: 3, message: 'It\'s my first post', likes: '8' },
        { id: 4, message: 'It\'s my first post', likes: '5' }
    ]
};



test('lenght of posts should be incremented', () => {
    // test data
    let action = addPostActionCreator("it-kamasutra.com");
    //action
    let newState = profileReducer(state, action);
    //expected
    expect(newState.postsData.length).toBe(5);
});

test('check message of new post should be correct', () => {
    // test data
    let action = addPostActionCreator("it-kamasutra.com");
    //action
    let newState = profileReducer(state, action);
    //expected
    expect(newState.postsData[4].message).toBe("it-kamasutra.com");
});

test('after deleting lenght of message should be decremented', () => {
    // test data
    let action = deletePost(1);
    //action
    let newState = profileReducer(state, action);
    //expected
    expect(newState.postsData.length).toBe(3);
});

test('after deleting lenght shouldn`t be decrement if id is incorrect', () => {
    // test data
    let action = deletePost(10);
    //action
    let newState = profileReducer(state, action);
    //expected
    expect(newState.postsData.length).toBe(4);
});


