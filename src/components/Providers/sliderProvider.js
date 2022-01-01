import React from "react";
import {useContext,createContext} from "react";
import {useEffect,useState} from "react";
import axios from "axios";




const SliderContext = createContext();

const SliderProvider = ({children}) => {
    const [slider, setSlider] = useState([]);
    const [photos, setPhotos] = useState([]);
    
    const getPhotos = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
        setPhotos(response.data);
   }

    useEffect( () => {
        getPhotos();
       }, []);

    useEffect( () => {
        if (photos.length){
            let arr = [];
            photos.map( p =>{
                arr.push({
                    ...p ,
                    src: p.url ,
                    width: 1 ,
                    height: 1
                })
                setSlider(arr)
            })
        }
    },[photos])
    return (
        <SliderContext.Provider value={{slider}}>
            {children}
        </SliderContext.Provider>
    )
}
const useSlider = () => {
    return(
        useContext(SliderContext)
    )
}
export {useSlider,SliderProvider}