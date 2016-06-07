import React from 'react';

export default({note, onDelete}) => (
    <div>
        <span>{note.task} with id={note.id}</span>
        <button onClick={onDelete}>x</button>

    </div>

);
