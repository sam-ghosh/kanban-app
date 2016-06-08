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
    return (<ul>
        {notes.map(({id, editing, task}) => <li key={id}>
            <Note x={id} onClick={onNoteClick.bind(null, id)}>
                <Editable editing={editing} value={task} onEdit={onEdit.bind(null, id)} noteId={id}/>

                <button onClick={onDelete.bind(null, id)}>x</button>

            </Note>
        </li>)}
    </ul>)
}
