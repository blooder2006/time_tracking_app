import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Input } from "semantic-ui-react";
import uuid from "uuid";

export default class TimerForm extends React.Component {
  state = { title: this.props.title || "", project: this.props.project || "" };

  handleClose = () => this.props.onFormClose();
  handleSubmit = () => {
    this.props.onFormSubmit({
      id: uuid.v4(),
      title: this.state.title,
      project: this.state.project,
      elapsed: 0,
      runningSince: Date.now()
    });
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleProjectChange = e => {
    this.setState({ project: e.target.value });
  };

  render() {
    const submitText = this.props.id ? "Update" : "Create";
    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Card.Description>
              <Input
                icon="flag outline"
                iconPosition="left"
                placeholder="enter title"
                defaultValue={this.state.title}
                onChange={this.handleTitleChange}
              />
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <Input
                icon="folder open outline"
                iconPosition="left"
                placeholder="enter project"
                defaultValue={this.state.project}
                onChange={this.handleProjectChange}
              />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={this.handleSubmit}>
                {submitText}
              </Button>
              <Button basic color="red" onClick={this.handleClose}>
                Cancel
              </Button>
            </div>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
