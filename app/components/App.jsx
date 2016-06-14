import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions'

class App extends React.Component {

    render = () => {
        const {notes} = this.props;

        return (
            <div>
                {this.props.test}
                <button className="add-note" onClick={this.addNote}>+</button>
                <button className="delete-note" onClick={this.removeLastNote}>-</button>
                <Notes notes={notes} onDelete={this.deleteNote} onNoteClick={this.activateNoteEdit} onEdit={this.editNote}/>
            </div>
        );
    };

    addNote = () => {
        this.props.NoteActions.create({
            id: uuid.v4(),
            task: 'New Task'
        });

        console.log('task added');
    }

    removeLastNote = () => {

        const x = this.state.notes.pop();
        console.log(`deleted item = ${x.task}`);

        this.setState({notes: this.state.notes});
        console.log('task removed');
    };

    deleteNote = (id, e) => {
        e.stopPropagation();
        this.props.NoteActions.delete(id);
        
        console.log(`Note with id=${id} deleted`);
    };

    activateNoteEdit = (id) => {
        // console.log(`in activateNoteEdit of ${id}`);
        this.props.NoteActions.update({id, editing: true});
        
    };

    editNote = (id, task) => {
        console.log(`in editNote of ${id}`);
        this.props.NoteActions.update({id, editing: false, task});
    }

}

const fn = ({notes}) => (Object.assign({notes}, {test: 'test'}));

export default connect(fn, {NoteActions})(App)