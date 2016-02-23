var React = require('react');
var AuthPage = require('./auth/auth_page');

var App = React.createClass({
  render: function(){
    return(
      <div>
        <AuthPage />
      </div>
    );
  }
});

module.exports = App;
