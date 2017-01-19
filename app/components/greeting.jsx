import React from "react";

const Greeting = React.createClass({
  render: function() {
    return (
      <div className="greeting">
      Hello, {this.props.name}!
    </div>
    );
  }
});

export default Greeting