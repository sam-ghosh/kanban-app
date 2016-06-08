import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                }, {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        }
    }
    render = () => {
        const {notes} = this.state;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <button onClick={this.removeLastNote}>-</button>
                <Notes notes={notes} onDelete={this.deleteNote} onNoteClick={this.activateNoteEdit} onEdit={this.editNote}/>
            </div>
        );
    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([
                {
                    id: uuid.v4(),
                    task: 'New Task'
                }
            ])
        });
        console.log('task added');
    }

    removeLastNote = () => {

        const x = this.state.notes.pop();
        console.log(`deleted item = ${x.task}`);

        this.setState({notes: this.state.notes});
        console.log('task removed');
    }

    deleteNote = (id, e) => {
        e.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        })
        console.log(`Note with id=${id} deleted`);
    }

    activateNoteEdit = (id) => {
        console.log(`in activateNoteEdit of ${id}`);
        this.setState({
            notes: this.state.notes.map(note => {
                if (note.id === id) {
                    note.editing = true;
                }
                return note;
            })
        });
    }

    editNote = (id, task) => {
        console.log(`in editNote of ${id}`);
        this.setState({
            notes: this.state.notes.map(n => {
                if (n.id === id) {
                    n.editing = false;
                    n.task = task
                }
                return n;

            })
        });
    }

}
