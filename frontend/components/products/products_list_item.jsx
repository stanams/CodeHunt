var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var browserHistory = require('react-router').browserHistory;

var ProductsListItem = React.createClass({

  makeUrl: function(){
    var path = "/products/" + this.props.product.id;
    return path;
  },

  handleClick: function(){
    browserHistory.push(this.makeUrl());
  },

  render: function(){

    return(
        <li className="index-products-list-item">
          <p onClick={this.handleClick} className="list-item-title">{this.props.product.name}</p>
          <p className="list-item-description">{this.props.product.description}</p>
          <p className="list-item-comments-nb">{this.props.product.comments.length}</p>
        </li>

    );
  }
});

module.exports = ProductsListItem;
// <p>{this.props.product.comments.length} comments</p>
