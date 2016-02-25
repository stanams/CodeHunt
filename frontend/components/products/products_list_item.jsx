var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ProductsListItem = React.createClass({

  makeUrl: function(){
    var path = "products/" + this.props.product.id;
    return path;
  },

  render: function(){
    debugger
    return(
        <li className="index-products-list-item">
          <Link to={this.makeUrl()}><p className="list-item-title">{this.props.product.name}</p></Link>
          <p className="list-item-description">{this.props.product.description}</p>
        </li>

    );
  }
});

module.exports = ProductsListItem;
