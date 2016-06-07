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

function fn () {
    console.log('xxx');
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
  }
  render = () => {
    const {notes} = this.state;
64
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <button onClick={this.removeLastNote}>-</button>
        <Notes notes={notes} />
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
      console.log(`deleted item = ${x}`);

      this.setState({
          notes: this.state.notes
      });
      console.log('task removed');
  }

}
