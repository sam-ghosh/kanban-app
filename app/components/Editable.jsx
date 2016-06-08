import React from 'react';

export default({
    editing,
    value,
    onEdit,
    ...props
}) => {
    // console.log(`edting=${editing}`);
    // console.log(`props=${JSON.stringify(props)}`);
    if (editing) {
        return <Edit value={value} onEdit={onEdit} {...props}/>
    } else {
        return <span {...props}>value: {value}</span>
    }

}

const Edit = ({
    onEdit = () => {},
    value,
    ...props
}) => (
    <span onClick={onEdit} {...props}>
        <span>edit: {value}</span>
    </span>
);
