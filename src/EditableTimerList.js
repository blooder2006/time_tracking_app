import React from "react";
import "semantic-ui-css/semantic.min.css";
import EditableTimer from "./EditableTimer";

export default class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map(timer => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
        onStopClick={this.props.onStopClick}
        onStartClick={this.props.onStartClick}
      />
    ));
    return <React.Fragment>{timers}</React.Fragment>;
  }
}
