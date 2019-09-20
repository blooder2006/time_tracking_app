import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card } from "semantic-ui-react";

export default class Timer extends React.Component {
  render() {
    const elapsedString = this.props.elapsed;
    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>{this.props.project}</Card.Meta>
            <Card.Description>
              <h2>{elapsedString}</h2>
            </Card.Description>
            <Button.Group basic size="small">
              <Button icon="edit" />
              <Button icon="trash" />
            </Button.Group>
          </Card.Content>
          <Card.Content extra>
            {this.props.runningSince ? (
              <Button basic color="red">
                Stop
              </Button>
            ) : (
              <Button basic color="green">
                Start
              </Button>
            )}
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
