import React, { useState, useRef } from "react";
import Button from '../button';
import styles from "./search.module.scss";

interface SearchProps {
    searchLabel: string,
    setSeachValue: (value: string) => void,
    btnLabel: string
}

const Search: React.FC<SearchProps> = (props) => {
    const [value, setValue] = useState("");

    const onButtonClick = () => {
        setSeachValue(value)
    }

    const { searchLabel, setSeachValue, btnLabel } = props;
    return (
        <>
            <div>
                <span className={styles.searchLabel}>{searchLabel}</span> {' '}
                <input className={styles.searchInput} type="text" onChange={(e) => { setValue(e.target.value) }} /> {' '}
                <Button label={btnLabel} buttonClick={onButtonClick} />
            </div>


        </>
    )
}

export default Search;