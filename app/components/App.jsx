import React from 'react';
import Notes from './notes';
import uuid from 'uuid';

/*const notes = [
    {
        id: uuid.v4(),
        task: 'Learn React'
    }, {
        id: uuid.v4(),
        task: 'Do laundry'
    }
];

export default () => (
    <div>
        <button onClick={() => console.log('add note')}>+</button>
        <Notes notes={notes} />
    </div>

);*/

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes : [
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

    render() {
        const {notes} = this.notes;

        return (
            <div>
                <button onClick={() => console.log('add note')}>+</button>
                <Notes notes={notes} />

            </div>
        );
    }
}
