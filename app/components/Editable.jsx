import React from 'react';

export default({
    editing,
    value,
    onEdit,
    ...props
}) => {
    // console.log(`editing=${editing} \nvalue=${value}\nedting=${editing}\nprops=${JSON.stringify(props)}`);
    // console.log(`edting=${editing}`);
    // console.log(`props=${JSON.stringify(props)}`);
    if (editing) {
        return <Edit value={value} onEdit={onEdit} {...props}/>
    } else {
        return <span {...props}>value: {value}</span>
    }

}

/*const Edit = ({
    onEdit = () => {},
    value,
    ...props
}) => (
    <span onClick={onEdit} {...props}>
        <span>edit: {value}</span>
    </span>
);
*/

class Edit extends React.Component {
    render() {

        const {
            value,
            ...props
        } = this.props;
        // console.log(`value=${value}\nprops=${JSON.stringify(props)}\nthis.props=${JSON.stringify(this.props)}`);

        return <input type="text" autoFocus={true} defaultValue={value} onBlur={this.finishEdit} onKeyPress={this.checkEnter} {...props}/>;

    }

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit = (e) => {
        const value = e.target.value;

        if (this.props.onEdit) {
            this.props.onEdit(value);
        }
    }
}
