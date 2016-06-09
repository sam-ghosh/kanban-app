import React from 'react';
import classnames from 'classnames'
import Edit from './Edit'


export default({
    className,
    editing,
    value,
    onEdit,

    ...props
}) => {
    // console.log(`editing=${editing} \nvalue=${value}\nedting=${editing}\nprops=${JSON.stringify(props)}`);
    // console.log(`edting=${editing}`);
    console.log(`Editable props=${JSON.stringify(props)}`);
    if (editing) {
        return <Edit className={className} value={value} onEdit={onEdit} {...props}/>
    } else {
        return <span className={classnames('value', className)} {...props}>value: {value}</span>
    }

}
