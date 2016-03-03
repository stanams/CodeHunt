var React = require('react');
var TagItem = requrie('./tag_item');

var TagsList = React.createClass({
  render: function(){
    return(
      <ul>
        <TagItem/>
      </ul>
    );
  }
});

module.exports = TagsList;
