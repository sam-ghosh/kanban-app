import React from 'react';
import Note from './Note'

export default({notes, onDelete}) => (

    <ul>
        {notes.map(note => <li key={note.id}>
            <Note note={note} onDelete={onDelete.bind(null, note.id)}/>
        </li>
        )}
    </ul>
);
