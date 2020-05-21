import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  state = {
     
  };
  
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>              
            <p>
              {this.props.startYear} - {this.props.endYear}
            </p>
          </Cell>
          <Cell col={4}>
            <h4 style={{ marginTop: "0px" }}>{this.props.collegeName}</h4>
                <p>{this.props.collegeDescription}</p>
          </Cell>
          <Cell col={4}>
                <p>{this.props.degree}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
