import {createContext,useContext} from "react";

const PortfolioContext = createContext({});

const PortfolioProvider = ({children}) => {
        const portfolioTypes = [
            {
                id: 1 ,
                name: "Frontend",
                sub: [
                    {
                        id: Math.random(),
                        name: "React"
                    },
                    {
                        id: Math.random(),
                        name: "Angular"
                    },
                    {
                        id: Math.random(),
                        name: "Vue"
                    }
                ]
            },
            {
                id: 2,
                name: "Backend",
                sub: [
                    {
                        id: Math.random(),
                        name: "Laravel"
                    },
                    {
                        id: Math.random(),
                        name: "Node"
                    },
                    {
                        id: Math.random(),
                        name: "Python"
                    }
                ]
            }
        ]
    const portfolios = [
        {
            id: Math.random(),
            name: 'Portfolio 1',
            subcategory: 'Laravel'
        },
        {
            id: Math.random(),
            name: 'Portfolio 2',
            subcategory: 'Vue'
        },
        {
            id: Math.random(),
            name: 'Portfolio 3',
            subcategory: 'React'
        },
        {
            id: Math.random(),
            name: 'Work 1',
            subcategory: 'Vue'
        },
        {
            id: Math.random(),
            name: 'Work 2',
            subcategory: 'Node'
        },
        {
            id: Math.random(),
            name: 'Work 3',
            subcategory: 'React'
        },
        {
            id: Math.random(),
            name: 'Project 1',
            subcategory: 'Angular'
        },
        {
            id: Math.random(),
            name: 'Project 2',
            subcategory: 'Python'
        },
        {
            id: Math.random(),
            name:  'Project 3',
            subcategory: 'Laravel'
        },
        {
            id: Math.random(),
            name: 'Portfolio 4',
            subcategory: 'Node'
        },
        {
            id: Math.random(),
            name: 'Project 4',
            subcategory: 'Laravel'
        },
        {
            id: Math.random(),
            name: 'Work 4',
            subcategory: 'React'
        },
    ]
    return (
        <PortfolioContext.Provider
            value={{portfolioTypes,
                    portfolios}}>
            {children}
        </PortfolioContext.Provider>
    )
}
const usePortfolio = () => {
    return useContext(PortfolioContext)
}

export {PortfolioProvider, usePortfolio};