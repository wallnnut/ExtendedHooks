/*eslint-disable */
import React from "react";
import CollapseWrapper from "../common/collapse";
const ComponentWrapper = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    return React.Children.map(arrayOfChildren, (child) => {
        return React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        });
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentWrapper>
                <Component />
                <Component />
                <Component />
            </ComponentWrapper>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    console.log(num);
    return <div>{num} Компонент списка</div>;
};

export default ChildrenExercise;
