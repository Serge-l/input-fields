import React from "react";
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}> 
        {children}

        </button> // получаем стиль как свойство объекта
    );
};

export default MyButton;