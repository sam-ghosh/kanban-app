import React from 'react';
import Note from './Note'

export default({notes}) => (

    <ul>{notes.map(note => <li key={note.id}><Note note={note}/></li>)}</ul>
);
