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
        <Qob /> 
      </React.Fragment>
    );
  }
}

export default App;
