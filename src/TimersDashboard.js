import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import uuid from "uuid";

export default class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        id: uuid.v4(),
        title: "title1",
        project: "project1",
        elapsed: 5456099,
        runningSince: Date.now()
      },
      {
        id: uuid.v4(),
        title: "title2",
        project: "project2",
        elapsed: 1273999,
        runningSince: Date.now()
      }
    ]
  };

  handleCreateFormSubmit = timer => {
    this.setState({ timers: [...this.state.timers, timer] });
  };

  render() {
    return (
      <Container text>
        <Header as="h2">TimersDashboard</Header>
        <EditableTimerList timers={this.state.timers} />
        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
      </Container>
    );
  }
}
