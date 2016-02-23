var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var AuthPage = React.createClass({
  render: function(){
    return(
      <div className="auth-bloc">
        <h1>Code Hunt</h1>
        <h3>Discover and vote for the best prodcuts</h3>
        <form onSubmit={this.loginClick}>
          <label>Username: </label>
          <input type="text" valueLink={this.linkState('username')} />
          <label>Username: </label>
          <input type="text" valueLink={this.linkState('username')} />
        </form>

        <button>Demo</button>
      </div>
    );
  }
});

module.exports = AuthPage;
