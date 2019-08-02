import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";
import EditableTimer from "./EditableTimer";

export default class EditableTimerList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <EditableTimer
          title="title"
          project="project"
          elapsed="elapsed"
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title="title"
          project="project"
          elapsed="elapsed"
          runningSince={null}
          editFormOpen={true}
        />
      </React.Fragment>
    );
  }
}
