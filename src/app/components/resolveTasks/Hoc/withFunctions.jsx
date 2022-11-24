/* eslint-disable */

import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    console.log(isAuth);
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            {
                <Component
                    {...props}
                    onLogOut={onLogOut}
                    onLogin={onLogin}
                    isAuth={isAuth}
                />
            }
        </CardWrapper>
    );
};

export default withFunctions;
