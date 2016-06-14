import React from 'react';
import Lane from './Lane';

const Lanes = ({lanes}) => (
    <div className="lanes">
        {lanes.map(lane => (
            <Lane className="lane" key={lane.id} lane={lane}/>
        ))}
    </div>
);

Lanes.propTypes = {
    lanes: React.PropTypes.array.isRequired
};

Lanes.defaultProps = {
    lanes: []
};

export default Lanes;


