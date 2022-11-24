import React, { useRef, useState, useEffect } from "react";
import Divider from "../../common/divider";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p> Previous State: {prevState.current} </p>
            <Divider />
            <p>Current State: {otherState}</p>
            <button onClick={toggleOtherState} className="btn btn-primary">
                toggleOtherState
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
