import React from 'react';
import classnames from 'classnames'


export default ({
    className,
    value,
    ...props
}) => {
    console.log(`Edit props = ${JSON.stringify(props)}`);
    // console.log(`this.props=${JSON.stringify(this.props)}`);

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            finishEdit(e);
        }
    }

    const finishEdit = (e) => {
        const value = e.target.value;
        // debugger;

        console.log(`Edit props inside finishEdit = ${JSON.stringify(props)}`);
        console.log(`props.onEdit = ${props.onEdit}`);
        console.log(`is true = ${props.onEdit == true}`);

        if (props.onEdit) {
            console.log('xxx');   // to ensure that control comes inside here
            props.onEdit(value);
        }
    }

    return <input
        className={classnames('edit', className)}
        type="text" autoFocus={true}
        defaultValue={value}
        onBlur={finishEdit}
        onKeyPress={checkEnter}
        {...props}/>;

}
