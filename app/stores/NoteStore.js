import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
    constructor() {
        this.bindActions(NoteActions);

        this.notes = [
            {
                id: uuid.v4(),
                task: 'Learn React'
            }, {
                id: uuid.v4(),
                task: 'Do laundry'
            }
        ];
    }

    create(note) {
        // debugger;
        this.setState({
            notes: this.notes.concat(note)
        });
    }

    update({id, task, editing}) {
        // console.log('update note', id);

        this.setState({
            notes: this.notes.map(note => {
                if (note.id === id) {
                    if (editing === true) {
                        note.editing = true;
                    } else if (editing === false){
                        note.editing = false;
                        note.task = task;
                        

                    }
                }
                return note;
            })
        });

    }

    delete(id) {
        // console.log('delete note', id);
        this.setState({
            notes: this.notes.filter(note => note.id !== id)
        });

    }

}