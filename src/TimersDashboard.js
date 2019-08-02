import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default class TimersDashboard extends React.Component {
  render() {
    return (
      <Container text>
        <Header as="h2">TimersDashboard</Header>
        <EditableTimerList />
        <ToggleableTimerForm isOpen={true} />
      </Container>
    );
  }
}
