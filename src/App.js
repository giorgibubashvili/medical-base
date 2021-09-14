import React from "react";
import Qob from "./qob";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Qob items={this.state.items} />
      </React.Fragment>
    );
  }
}

export default App;
