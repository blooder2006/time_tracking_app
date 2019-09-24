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
        elapsed: 0,
        runningSince: 0
      },
      {
        id: uuid.v4(),
        title: "title2",
        project: "project2",
        elapsed: 0,
        runningSince: 0
      }
    ]
  };

  handleEditFormSubmit = attrs => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attrs.id) {
          return { ...timer, title: attrs.title, project: attrs.project };
        } else {
          return timer;
        }
      })
    });
  };

  handleCreateFormSubmit = timer => {
    const newTimer = {
      ...timer,
      elapsed: 0,
      runningSince: 0,
      id: uuid.v4()
    };

    this.setState({ timers: [...this.state.timers, newTimer] });
  };

  handleTrashClick = timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId)
    });
  };

  handleStopClick = timerId => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          return {
            ...timer,
            elapsed: timer.elapsed + Date.now() - timer.runningSince,
            runningSince: null
          };
        } else {
          return timer;
        }
      })
    });
  };

  handleStartClick = timerId => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          return {
            ...timer,
            runningSince: Date.now()
          };
        } else {
          return timer;
        }
      })
    });
  };

  render() {
    return (
      <Container text>
        <Header as="h2">TimersDashboard</Header>
        <EditableTimerList
          timers={this.state.timers}
          onFormSubmit={this.handleEditFormSubmit}
          onTrashClick={this.handleTrashClick}
          onStopClick={this.handleStopClick}
          onStartClick={this.handleStartClick}
        />
        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
      </Container>
    );
  }
}
