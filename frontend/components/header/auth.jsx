var React = require('react');

var Auth = React.createClass({
  render: function(){
    return(
      <div>
        <h1>CodeHunt</h1>
        <h3>Discover and vote for the best prodcuts</h3>
        <ul>
          <li>Sign Up</li>
          <li>Sign In</li>
          <li>Demo</li>
        </ul>
      </div>
    );
  }
});

module.exports = Auth;
