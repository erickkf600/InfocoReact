import React    from "react";
import template from "./Slides.jsx";

class Slides extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Slides;
