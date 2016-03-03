var React = require('react');

var TagItem = React.createClass({
  render: function(){
    return(
      <li>
        {this.props.category}
      </li>
    );
  }
});

module.exports = TagItem;
