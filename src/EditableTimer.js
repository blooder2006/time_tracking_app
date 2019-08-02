import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.editFormOpen ? (
          <TimerForm title={this.props.title} project={this.props.project} />
        ) : (
          <Timer
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
