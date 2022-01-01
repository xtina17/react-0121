import React, {useContext, useEffect, useState} from 'react';
import {Link,useRouteMatch} from "react-router-dom";
import style from './about.module.css'
import axios from "axios";
import Preloader from "../../Preloader/preloader";
//checked

const About = () => {
    const {path} = useRouteMatch(); //this
    const [photo, setPhoto] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getPhotos = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=48');
        setPhoto(response['data']);
        setLoading(false);
    }
    useEffect(() => {
        getPhotos();
    },[]);
    return (
        <div className={style.about}>
            {
                isLoading ? <Preloader/> : photo.map( s => {
                    return (
                        <div className={style.photos} key={s.id}>
                            <Link className={style.link} to={`${path}/${s.id}`}>
                                <span>{s.title}</span>
                            </Link>
                            <img src={s.url} alt={photo}/>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default About;