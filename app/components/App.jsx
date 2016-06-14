import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import LaneActions from "../actions/LaneActions";
import Lanes from '../components/Lanes';

const App = ({lanes, LaneActions}) => {
    const addLane = () => {
        LaneActions.create({
            id: uuid.v4(),
            name: 'New Lane'
        });
    };

    return (
        <div>
            <button className="add-lane" onClick={addLane}>+</button>
            <Lanes lanes={lanes}/>
        </div>
    );


};

const fn = ({notes}) => ({notes});
export default connect(fn, {LaneActions})(App)