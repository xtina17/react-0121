import React, {createContext, useContext, useState} from "react"

const SkillsContext = createContext({});

const SkillsProviders = ({children}) => {

    const [skills, setSkills] = useState([
        {id: 1, name: 'HTML'},
        {id: 2, name: 'CSS'},
        {id: 3, name: 'JS'},
        {id: 4, name: 'PHP'},
        {id: 5, name: 'React JS'},
    ])

    const addSkills = (skill) => {
        setSkills( [...skills,skill]);
    }
    const editSkills = (id,name) => {
        skills.forEach(skill =>{
            if(skill.id === id){
                skill.name = name;
            }
            }
        )
    }
    const deleteSkills = (id) => {
        setSkills(skills.filter(s => s.id !== id));
    }

    return (
        <SkillsContext.Provider
            value={{
                skills,
                addSkills,
                editSkills,
                deleteSkills
            }}>
            {children}
        </SkillsContext.Provider>
    )
}
const useSkills = () => {
    return useContext(SkillsContext);
}
export {SkillsProviders, useSkills};