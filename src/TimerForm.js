import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Input } from "semantic-ui-react";

export default class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? "Update" : "Create";
    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Card.Description>
              <Input
                icon="flag outline"
                iconPosition="left"
                placeholder={this.props.title}
              />
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <Input
                icon="folder open outline"
                iconPosition="left"
                placeholder={this.props.project}
              />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                {submitText}
              </Button>
              <Button basic color="red">
                Cancel
              </Button>
            </div>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
