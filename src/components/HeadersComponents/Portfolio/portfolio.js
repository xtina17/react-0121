import React, {useContext, useState} from "react";
import style from './portfolio.module.css';
import {usePortfolio} from "../../Providers/portfolioProvider";
import Item from "../../Item/item";
import cn from "classnames";
//checked

const Portfolio = () => {
    const [subs, setSubs] = useState([]);
    const [activeSub, setActiveSub] = useState(null);
    const {portfolios,portfolioTypes} = usePortfolio();

    const showSubCategory = (subCategory) => {
        setSubs(subCategory);
        setActiveSub(null)
        console.log(subCategory)
    }

    const showSubInfo = (name) => {
        setActiveSub(name)
    }


    return(
        <div className={style.portfolio}>
            {
                portfolioTypes.map((item)=>{
                    return (
                        <div className={cn(style.categoryNames)}  >

                            <Item key={item.id} onClick={() =>showSubCategory(item.sub) } >
                            {item.name}
                            </Item>
                        </div>
                    )
                })
            }

            <div>
                {subs.map(({id, name}) => {
                    return (
                        <Item  key={id} onClick={() => showSubInfo(name)}>
                            {name}
                        </Item>
                    )
                })}
            </div>
            <div>
                {portfolios.map(({id,name,subcategory}) => {
                    return (
                        subcategory === activeSub ? <Item key={id}>
                            {name}
                        </Item> : null
                    )

                })}
            </div>
        </div>
    );
};

export default Portfolio;