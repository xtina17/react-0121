import React, {useEffect,useState} from 'react';
import style from "./posts.module.css";
import Preloader from "../../Preloader/preloader";
import {usePosts} from "../../Providers/postsProvider";
import {MdNavigateNext} from 'react-icons/md';
import {GrFormPrevious} from 'react-icons/gr';
import {Link, useParams, useRouteMatch} from "react-router-dom";
import {ImCancelCircle} from "react-icons/im";
import {render} from "react-dom";


const Posts = () => {
    const {path} = useRouteMatch();
    const {id} = useParams();


    const {posts, pages} = usePosts();
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(true);
    const [post, setPost] = useState('');
    const [showPercent ,setShowPercent] = useState(false);



    const show = (id) => {
        setShowPercent({[id]: !showPercent[id]});
    }
    const getPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        setPost(data)
        setLoading(false)
    }
    const changePage = (currentPage) => {
        setPage(currentPage)
    }


    useEffect(() => {
        getPost();
    }, []);


    return (
        <div>

            <div>
                {/*{isLoading ? <Preloader/> :*/ <ul className={style.posts}>

                    {
                        posts.map( p => {
                            return (
                                p.userId === page  && <li onClick={() => show(p.id)}  key={p.id}>
                                    <div >
                                        {p.title}
                                    </div>
                                </li>
                            )}
                        )
                    }
                </ul>}
            </div>
            {

                posts.map(x => {
                    return showPercent[x.id] && (
                        <div className={style.modalBg} onClick={show} style={{display: showPercent && "flex"}}>
                            <div onClick={e => e.stopPropagation()} className={style.modal}
                                 style={{display: showPercent && "flex"}}>
                                <ImCancelCircle onClick={show}/>
                                <div className={style.postModal}>
                                    <p className={style.title}>
                                    {x.title}
                                    </p>
                                    <hr/>
                                    <p className={style.body}>
                                        {x.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


            <div className={style.pagination}>
                {page > 1 && <span onClick={() => setPage(page - 1)}> <GrFormPrevious/><GrFormPrevious/> </span>}
                {
                    pages.map((page) =>{
                        return (
                            <p onClick={() => changePage(page) } className={style.page} key={page}>
                                {page}
                            </p>
                        )
                    })
                }
                {page < pages.length && <span onClick={() => setPage(page + 1)}> <MdNavigateNext/><MdNavigateNext/> </span>}
            </div>
        </div>

    );
};

export default Posts;