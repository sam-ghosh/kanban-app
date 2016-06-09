import React from 'react';
import classnames from 'classnames'

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

const Edit = ({
    className,
    value,
    onEdit = () => {},
    ...props
}) => {
    console.log(`Edit props = ${JSON.stringify(props)}`);
    // console.log(`this.props=${JSON.stringify(this.props)}`);

    const checkEnter = (e) => (e.key === 'Enter' && finishEdit(e));

    const finishEdit = (e) => (onEdit(e.target.value));

    return <input
        className={classnames('edit', className)}
        type="text" autoFocus={true}
        defaultValue={value}
        onBlur={finishEdit}
        onKeyPress={checkEnter}
        {...props}/>;
}
