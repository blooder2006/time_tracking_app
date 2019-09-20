import React from "react";
import "semantic-ui-css/semantic.min.css";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends React.Component {
  state = { editFormOpen: false };
  render() {
    return (
      <React.Fragment>
        {this.state.editFormOpen ? (
          <TimerForm
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
          />
        ) : (
          <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
          />
        )}
      </React.Fragment>
    );
  }
}
