var React = require('react');
var IndexView = require('./index_view');

var App = React.createClass({
  render: function(){
    return(
      {this.props.children}
    );
  }
});

module.exports = App;
