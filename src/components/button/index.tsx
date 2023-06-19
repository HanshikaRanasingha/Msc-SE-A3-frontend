import React from "react";
import styles from "./button.module.scss";

interface BtnProps {
    label: string,
    buttonClick: () => void,
    color?: string
}
const Button: React.FC<BtnProps> = (props) => {
    const { label, buttonClick, color = '#418cfc' } = props;
    return (
        <button
            style={{ backgroundColor: color }}
            className={styles.btn}
            onClick={buttonClick}>
            {label}
        </button>
    )
}

export default Button;