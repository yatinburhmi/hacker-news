import React, { Component } from "react";
import fetchLiveStories from "../api-functions/stories";
import { Card, Button } from "react-bootstrap";
var number = 0;

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveStories: []
    };
  }

  async componentDidMount() {
    var allThePromisies = fetchLiveStories(number);
    var liveStories = await allThePromisies;
    this.setState({
      liveStories: liveStories
    });
  }

  render() {
    return (
      <div>
        {Object.values(this.state.liveStories).map(story => (
          <Card key={story.id} style={{ width: "inherit", height: "7rem" }}>
            <Card.Body>
              <Card.Title>{story.title}</Card.Title>
              <Card.Subtitle className="mb-2">
                <b> by {story.by} </b>
              </Card.Subtitle>
              <Card.Text>
                <b>{story.score} points</b> <b>{story.time}</b>
                <Button id={story.id} variant="link">{story.comments} comments</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default home;
