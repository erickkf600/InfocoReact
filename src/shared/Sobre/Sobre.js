import React    from "react";
import template from "./Sobre.jsx";

class Sobre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 1,
    };
  }
  render() {
    return template.call(this);
  }
}

export default Sobre;
