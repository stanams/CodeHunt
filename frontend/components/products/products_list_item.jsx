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
    debugger
    return(
        <li onClick={this.handleClick} className="index-products-list-item">

          <div className="item-wrapper">
            <div className="upvote-button">
              <i className="fa fa-sort-asc up-icon"></i>
              <p>{this.props.product.votes_count}</p>
            </div>
            <div className="item-title-description">
              <p className="list-item-title">{this.props.product.name}</p>
              <p className="list-item-description">{this.props.product.description}</p>
            </div>
            <div className="list-item-comments-nb">
              <i className="fa fa-comments-o fa-lg icon-comment"></i>
              <p className="comment-nb">{this.props.product.comments.length}</p>
            </div>
            <ul className="name-container">
              <li className="item-username">{this.props.product.author.username}</li>
            </ul>
          </div>
        </li>

    );
  }
});

module.exports = ProductsListItem;
// <p>{this.props.product.comments.length} comments</p>
