var React = require('react');

var ProductsListItem = React.createClass({
  render: function(){
    return(
      <li className="index-products-list-item">
        <p className="list-item-title">{this.props.product.name}</p>
        <p className="list-item-description">{this.props.product.description}</p>
      </li>
    );
  }
});

module.exports = ProductsListItem;
