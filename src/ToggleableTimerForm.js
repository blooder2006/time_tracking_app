import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import TimerForm from "./TimerForm";

export default class ToggleableTimerForm extends React.Component {
  state = { isOpen: false };

  handleFormOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleFormSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormClose={this.handleFormOpen}
          onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      return (
        <React.Fragment>
          <Button icon="plus" onClick={this.handleFormOpen} />
        </React.Fragment>
      );
    }
  }
}
