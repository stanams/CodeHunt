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
        <li onClick={this.handleClick} className="index-products-list-item">
          <p className="list-item-title">{this.props.product.name}</p>
          <p className="list-item-description">{this.props.product.description}</p>
          <div className="list-item-comments-nb">
            <i className="fa fa-comments-o fa-lg icon-comment"></i>
            <p className="comment-nb">{this.props.product.comments.length}</p>
          </div>
          <ul className="pic-container">
            <li className="users-picture-product-list-item first"></li>
          </ul>
        </li>

    );
  }
});

module.exports = ProductsListItem;
// <p>{this.props.product.comments.length} comments</p>
