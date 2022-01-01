import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Preloader from "../../../Preloader/preloader";
import style from "./post.module.css";

const Post = () => {

    const {id} = useParams();

    const [isLoading, setLoading] = useState(true);
    const [post, setPost] = useState('');



    const getPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json();

        setPost(data);
        setLoading(false);
    };


    useEffect(() => {
        getPost();
    }, []);


    return (
        <div className={style.posts}>
            <h2 className={style.postH2}>Title </h2>
            <div className={style.post}>
                {isLoading ? <Preloader/> : post.title}
            </div>
        </div>
    );
};

export default Post;