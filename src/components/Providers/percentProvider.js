import React, {createContext, useContext, useState} from "react"

const PercentContext = createContext();

const PercentProvider = ({children}) => {
    const [percent, setPercent] = useState([
        {id:1 , skills: "HTML" ,percent:"90%" , internship : "2+" , review: "312+"},
        {id:2 , skills: "CSS",percent:"80%", internship : "3+"  , review: "715+"},
        {id:3 , skills: "SCSS",percent:"50%", internship : "4+"  , review: "141+"},
        {id:4 , skills: "JavaScript",percent:"70%", internship : "2+"  , review: "378+"},
        {id:5 , skills: "React js",percent:"90%", internship : "3+"  , review: "917+"}
    ])
    return (
        <PercentContext.Provider value={{percent}}>
            {children}
        </PercentContext.Provider>
    )
}
const usePercent  = () => {
    return useContext(PercentContext);
}
export {PercentProvider, usePercent};