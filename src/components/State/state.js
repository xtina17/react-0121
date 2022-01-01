import {createContext} from "react";
//*checked*//

const portfolio = [
    {id: 1, work: 'Number 1'},
    {id: 2, work: 'Number 2'},
    {id: 3, work: 'Number 3'},
    {id: 4, work: 'Number 4'},
    {id: 5, work: 'Number 5'},
]

const skills = [
    {id: 1, skill: 'HTML'},
    {id: 2, skill: 'CSS'},
    {id: 3, skill: 'JS'},
    {id: 4, skill: 'PHP'},
    {id: 5, skill: 'React JS'},
]

const object = {
    a: [
        1, 2, 3
    ],
    b: [
        4, 2, 3
    ],
    c: [
        1, 5, 3
    ]
}

export const portfolioContext = createContext(portfolio);
export const skillsContext = createContext(skills);
export const objectBContext = createContext(object.b);