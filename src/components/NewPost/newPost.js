import React, {useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {addPostsAC,deletePostsAC} from "../../Redux/Actions/posts.action";
import style from './newPost.module.css'

const NewPost = () => {
    const posts = useSelector(state => state.postsReducer.posts);
    const dispatch = useDispatch();

    const [newPost, setNewPost] = useState('');
    
    const addNewPost = () => {
        dispatch(addPostsAC({id: Math.random() ,post: newPost}));
        setNewPost('');
    }

    const deleteThisPost = (id) => {
        dispatch(deletePostsAC(id));
    }
    return (
        <div className={style.newPost}>
            {posts.map(({id,post}) => {
                return <div key={id}>
                    {post}
                    <button onClick={() => deleteThisPost(id)}>DELETE</button>
                </div>
            })}
            <input
                type="text"
                value={newPost}
                onChange={e => setNewPost(e.target.value)}
            />
            <button onClick={addNewPost}>ADD</button>
        </div>
    );
};

export default NewPost;