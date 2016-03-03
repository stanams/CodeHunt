var React = require('react');
var TagItem = require('./tag_item');

var TagsList = React.createClass({
  var tList = this.props.product.category.map(function(category, idx){
    return <TagItem key={idx} category={category} />;
  })
  render: function(){
    return(
      <ul>
        {tList}
      </ul>
    );
  }
});

module.exports = TagsList;
