import React, {useState} from 'react';
import SearchInput from "../../Global/SearchInput/searchInput";
import style from "./search.module.css";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const search = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <div className={style.searchDiv}>
            <SearchInput value={searchValue} type="text" placeholder="search..." cn="searchInput" onChange={search}/>
            <div className={style.icon}>
                <BsSearch/>
            </div>
        </div>
    );
};
export default Search;
