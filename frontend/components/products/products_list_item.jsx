var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var browserHistory = require('react-router').browserHistory;
var VoteButton = require('../votes/vote-button');

var ProductsListItem = React.createClass({

  makeUrl: function(){
    var path = "/products/" + this.props.product.id;
    return path;
  },

  makeProfileUrl: function(){
    var path = "/users/" + this.props.product.author.id;
    return path;
  },

  handleClick: function(){
    browserHistory.push(this.makeUrl());
  },

  handleProfileClick: function(){
    browserHistory.push(this.makeProfileUrl());
  },

  render: function(){
debugger
    return(
        <li className="index-products-list-item">

          <div className="item-wrapper">

            <VoteButton productData={this.props.product}/>
            <div onClick={this.handleClick} className="item-title-description">
              <p className="list-item-title">{this.props.product.name}</p>
              <p className="list-item-description">{this.props.product.description}</p>
            </div>
            <div className="list-item-comments-nb">
              <i className="fa fa-comments-o fa-lg icon-comment"></i>
              <p className="comment-nb">{this.props.product.comments_count}</p>
            </div>
            <ul className="name-container">
              <li onClick={this.handleProfileClick} className="item-username">{this.props.product.author.username}</li>
            </ul>
          </div>
        </li>

    );
  }
});

module.exports = ProductsListItem;
// <p>{this.props.product.comments.length} comments</p>
