var React = require('react');

var AuthPage = React.createClass({
  render: function(){
    return(
      <div className="auth-bloc">
        <h1>Code Hunt</h1>
        <h3>Discover and vote for the best prodcuts</h3>
        <button>Sign In</button>
        <button>Sign Up</button>
        <button>Demo</button>
      </div>
    );
  }
});

module.exports = AuthPage;
