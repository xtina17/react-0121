export const GET_POSTS = 'GET_POSTS';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POSTS = 'DELETE_POSTS';

export const addPostsAC = (post) => {
    return {
        type: ADD_POSTS,
        payload: post
    }
}
export const deletePostsAC = (id) => {
    return {
        type: DELETE_POSTS,
        payload: id
    }
}