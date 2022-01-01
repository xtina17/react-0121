import React from "react";
import {useState,useContext,createContext,useEffect} from "react";
import axios from "axios";

const PostsContext = createContext();

const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() =>{
        let arr = [];
        if (posts.length){
            posts.map(p =>{
                !arr.includes(p.userId) && arr.push(p.userId)
            })
            setPages(arr);
        }
    }, [posts])

    const getPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=50')
        setPosts(response.data);
    }
    useEffect(() =>{
        getPosts();
    },[])
    
    return (
        <PostsContext.Provider value={{posts,pages}}>
            {children}
        </PostsContext.Provider>
    )
}
const usePosts = () => {
    return(
        useContext(PostsContext)
    )
}
export {usePosts,PostsProvider};