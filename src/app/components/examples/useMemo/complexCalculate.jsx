/*eslint-disable */

import React, { useState, useRef, useMemo } from "react";
import { useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("runFactorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, SetOtherState] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);

    const btnColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render btnColor");
    }, [btnColor]);

    const handleClick = ({ target }) => {
        target.name === "add"
            ? setValue((prevState) => prevState + 1)
            : setValue((prevState) => prevState - 1);
    };

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>
                    {`factorial: ${value}`} {fact}
                </p>
                <button
                    onClick={handleClick}
                    name="add"
                    className="btn btn-primary"
                >
                    +1
                </button>
                <button
                    onClick={handleClick}
                    name="sub"
                    className="btn btn-primary"
                >
                    -1
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    onClick={() => SetOtherState((prevState) => !prevState)}
                    className={"btn btn-" + btnColor}
                >
                    ChangeColor
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
