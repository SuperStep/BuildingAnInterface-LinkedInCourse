import React, { Component } from "react";
import "../css/App.css";

import AddAppointments from "./AddAppointments";
import ListAppointments from "./ListAppointments";
import SearchAppointments from "./SearchAppointments";

import { without } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      lastIndex: 0
    };
    this.deleteAppointent = this.deleteAppointent.bind(this);
  }

  deleteAppointent(apt) {
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt);
    this.setState({
      myAppointments: tempApts
    });
  }

  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const apts = result.map((item) => {
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          item.itemId = this.state.lastIndex;
          return item;
        });

        this.setState({
          myAppointments: apts
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments
                  myAppointments={this.state.myAppointments}
                  deleteAppointent={this.deleteAppointent}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
