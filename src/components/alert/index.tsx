import React from "react";
import styles from "./alert.module.scss";

interface AlertProps {
    alertText: string,
    isInitial: boolean,
    isError: boolean
}
const Alert: React.FC<AlertProps> = (props) => {
    const { alertText, isInitial, isError } = props;
    return (
        <div className={isError ? styles.errorAlert : styles.alert}>
            <span className={isError ? styles.errorAlertText : styles.alertText}>{alertText}</span>
        </div>
    )
}

export default Alert;