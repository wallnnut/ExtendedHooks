import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    return (
        <>{isAuth ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}</>
    );
};

export default withLogin;
