import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Cell,
  Grid,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
            {/* Project 1 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "320px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-2.svg) center/ cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              This is react project. If you want to check it out you can visit
              my github.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

           {/* Project 2 */}
           <Card
            shadow={5}
            style={{ width: "320px", height: "320px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-2.svg) center/ cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              This is react project. If you want to check it out you can visit
              my github.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            shadow={5}
            style={{ width: "320px", height: "320px", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-2.svg) center/ cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              This is react project. If you want to check it out you can visit
              my github.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Java</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is JavaScrript</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Java</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

       
          <Grid>
            <Cell col={12}>
              <div className="contant">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      
      </div>
    );
  }
}

export default Projects;
