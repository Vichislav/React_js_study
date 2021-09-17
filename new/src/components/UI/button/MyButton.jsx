import React from "react";
import classes from "../button/MyButton.module.css"; //импортируем файлик с стилями

const MyButton = ({children, ...props}) => {

    return (
        <button {...props} className={classes.myBtn}> 
            {children}
        </button>
    );

};

export default MyButton;