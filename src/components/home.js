import React, { Component } from "react";
class Home extends Component {

  render() {
    return (
      <div className="space-background-two">
      <div className="mainPage">

        <h2>Hello Scoundrels!</h2>
        <p className="lead">
          This tool is intended to help automate the grunt work of your
          campaign.
        </p>
        <hr className="my-4" />
        <p>
          View other players characters or check out the galaxy map. Login to
          see your characters stats, current items, funds,and location. Go to
          the shop and buy new items or sell ones you don't want! This is your
          datapad, use it however you please.
        </p>
      </div>
      <div id="three-container"></div>
      <div id="instructions">
      Search for planets, cities, items, or species.
      </div>
      </div>
    );
  }
}

export default Home;
