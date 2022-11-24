/* eslint-disable */
import React from "react";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button onClick={onLogOut}>Выйти из системы</button>
            ) : (
                <button onClick={onLogin}>Войти в систему</button>
            )}
        </>
    );
};

export default SimpleComponent;
