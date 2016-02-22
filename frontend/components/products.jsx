var React = require('react');

var ProductList = React.createClass({
  render: function(){
    return(
      <div>
        {productList}
      </div>
    );
  }
});

module.exports = ProductList;
