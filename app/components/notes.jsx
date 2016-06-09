import React from 'react';
import Note from './Note'
import Editable from './Editable'

export default({
    notes,
    onDelete = () => {},
    onNoteClick = () => {},
    onEdit = () => {}
}) => {
    // console.log(`${onNoteClick}`);
    return (<ul className="notes">
        {notes.map(({id, editing, task}) => <li key={id}>
            <Note onClick={onNoteClick.bind(null, id)} x={id} className="note">
                <Editable className="editable" editing={editing} value={task} onEdit={onEdit.bind(null, id)} noteId={id}/>

                <button className="delete" onClick={onDelete.bind(null, id)}>x</button>

            </Note>
        </li>)}
    </ul>)
}
