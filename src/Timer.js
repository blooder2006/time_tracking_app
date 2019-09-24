import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card } from "semantic-ui-react";

export default class Timer extends React.Component {
  componentDidMount() {
    //this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    //clearInterval(this.forceUpdateInterval);
  }

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
    clearInterval(this.forceUpdateInterval);
  };

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  };

  render() {
    let elapsedString = "";
    this.props.runningSince
      ? (elapsedString =
          this.props.elapsed + Date.now() - this.props.runningSince)
      : (elapsedString = this.props.elapsed);
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
              <Button icon="edit" onClick={this.props.onEditClick} />
              <Button icon="trash" onClick={this.handleTrashClick} />
            </Button.Group>
          </Card.Content>
          <Card.Content extra>
            {this.props.runningSince ? (
              <Button basic color="red" onClick={this.handleStopClick}>
                Stop
              </Button>
            ) : (
              <Button basic color="green" onClick={this.handleStartClick}>
                Start
              </Button>
            )}
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
