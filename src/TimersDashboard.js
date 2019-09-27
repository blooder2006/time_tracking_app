import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import uuid from "uuid";

export default class TimersDashboard extends React.Component {
  state = {
    timers: []
  };

  componentDidMount() {
    /* fetch("/data.json")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState(result);
      });*/

    /*const fff = async () => {
      let response = await fetch("/data.json");
      let result = await response.json();
      return result;
    };
    fff().then(result => this.setState(result));*/

    (async () => {
      let response = await fetch("http://localhost:3005/get");
      let result = await response.json();
      this.setState(result);
    })();
  }

  handleEditFormSubmit = attrs => {
    const newTimers = {
      timers: this.state.timers.map(timer => {
        if (timer.id === attrs.id) {
          return { ...timer, title: attrs.title, project: attrs.project };
        } else {
          return timer;
        }
      })
    };

    this.setState(newTimers);
    this.serverUpdateTimer(newTimers);
  };

  handleCreateFormSubmit = timer => {
    const newTimer = {
      ...timer,
      elapsed: 0,
      runningSince: 0,
      id: uuid.v4()
    };

    const newTimers = { timers: [...this.state.timers, newTimer] };
    this.setState(newTimers);
    this.serverUpdateTimer(newTimers);
  };

  handleTrashClick = timerId => {
    const newTimers = {
      timers: this.state.timers.filter(t => t.id !== timerId)
    };
    this.setState(newTimers);
    this.serverUpdateTimer(newTimers);
  };

  handleStopClick = timerId => {
    const newTimers = {
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
    };

    this.setState(newTimers);
    this.serverUpdateTimer(newTimers);
  };

  handleStartClick = timerId => {
    const newTimers = {
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
    };
    this.setState(newTimers);
    this.serverUpdateTimer(newTimers);
  };

  serverUpdateTimer = data => {
    (async () => {
      let response = await fetch("http://localhost:3005/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json"
        }
      });
    })();
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
