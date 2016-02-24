var React = require('react');
var IndexView = require('./index_view.jsx');

var App = React.createClass({
  render: function(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
