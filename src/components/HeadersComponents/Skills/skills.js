import React, {useContext, useState} from 'react';
import {skillsContext} from "../../State/state";
import css from './skills.module.css';
import Button from "../../Global/button/button";
import Input from "../../Global/Input/input";
import {useSkills} from "../../Providers/skillsProvider";


const Skills = () => {

    const {skills, addSkills, editSkills, deleteSkills} = useSkills()

    const [showEdit, setShowEdit] = useState({})


    // values
    const [newSkill, setNewSkill] = useState('')
    const [editValue, setEditValue] = useState({})

    return (
        <div className={css.skillsBlock}>

            <div>
                <Input
                    cn="skillInput"
                    value={newSkill}
                    onChange={e => setNewSkill(e.target.value)}
                    type="text"
                />

                <Button
                    onClick={() => {
                        if (newSkill) {
                            addSkills({
                                id: Math.random(),
                                name: newSkill
                            })
                            setNewSkill('')
                        }
                    }}
                    cn="skillButton"
                >
                    Add info
                </Button>
            </div>


            <ul className={css.skills}>
                {
                    skills.map(({id, name}) => {
                        return <li key={id}>
                            {showEdit[id]
                                ? <Input
                                    cn="skillEditInput"
                                    value={editValue[id]}
                                    onChange={e => setEditValue({[id]: e.target.value})}
                                    type="text"
                                />
                                : <span>{name}</span>}
                            <Button
                                cn='skillButton'
                                onClick={showEdit[id]
                                    ? () => {
                                        editSkills(id, editValue[id])
                                        setShowEdit({})
                                    }
                                    : () => {
                                        setShowEdit({[id]: true})
                                        setEditValue({[id]: name})
                                    }}
                            >
                                {showEdit[id] ? "Save" : "Edit"}
                            </Button>
                            <Button
                                cn='skillButton'
                                onClick={() => deleteSkills(id)}
                            >
                                Delete
                            </Button>
                        </li>
                    })
                }

            </ul>


        </div>
    );
};

export default Skills;