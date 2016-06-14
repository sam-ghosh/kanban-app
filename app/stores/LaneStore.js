import LaneActions from "../actions/LaneActions";

export default class NoteStore {
    constructor() {
        this.bindActions(LaneActions);

        this.lanes = [];
    }

    create(lane) {
        // debugger;
        lane.notes = lane.notes || [];   // if null make empty list of lanes
        this.setState({
            lanes: this.lanes.concat(lane)
        });
    }
}