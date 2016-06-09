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

class Edit extends React.Component {
    render() {

        const {
            className,
            value,
            ...props
        } = this.props;
        // console.log(`value=${value}\nprops=${JSON.stringify(props)}\nthis.props=${JSON.stringify(this.props)}`);
        console.log(`Edit render props = ${JSON.stringify(props)}`);
        console.log(`this.props=${JSON.stringify(this.props)}`);
        return <input className={classnames('edit', className)} type="text" autoFocus={true} defaultValue={value} onBlur={this.finishEdit} onKeyPress={this.checkEnter} {...props}/>;

    }

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit = (e) => {
        const value = e.target.value;
        // debugger;

        if (this.props.onEdit) {
            console.log('xxx');
            this.props.onEdit(value);
        }
    }
}
