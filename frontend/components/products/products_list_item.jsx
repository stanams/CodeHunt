var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var browserHistory = require('react-router').browserHistory;
var VoteButton = require('../votes/vote-button');
var UserStore = require('../../stores/user_store');
// var TagsList = require('../categories/tags_list');

var ProductsListItem = React.createClass({

  makeUrl: function(){
    var path = "/products/" + this.props.product.id;
    return path;
  },

  makeProfileUrl: function(authorId){
    var path = "/users/" + authorId;
    return path;
  },

  handleClick: function(){
    browserHistory.push(this.makeUrl());
    window.scrollTo(0,0);
  },

  handleProfileClick: function(authorId){
    browserHistory.push(this.makeProfileUrl(authorId));
    window.scrollTo(0,0);
  },

  render: function(){
    var userId = this.props.product.author_id;
    if (typeof UserStore.find(userId) !== "undefined") {
      var profilePic = UserStore.find(userId).picture;
    } else {
      var profilePic = this.props.product.author.profile_pic;
    }
    // debugger
    return(
        <li className="index-products-list-item">

          <div className="item-wrapper">

            <VoteButton productData={this.props.product}/>
            <div onClick={this.handleClick} className="item-title-description">
              <p className="list-item-title">{this.props.product.name}</p>
              <p className="list-item-description">{this.props.product.description}</p>
            </div>
            <div className="tag-item">
              {this.props.product.category}
            </div>
            <div className="list-item-comments-nb">
              <i className="fa fa-comments-o fa-lg icon-comment"></i>
              <p className="comment-nb">{this.props.product.comments_count}</p>
            </div>
            <ul className="name-container">
              <li className="item-username small-cropper">
                <img onClick={this.handleProfileClick.bind(null, this.props.product.author_id)}
                     className="small-profile-pic"
                     src={profilePic}
                 />
              </li>
            </ul>
          </div>
        </li>

    );
  }
});

module.exports = ProductsListItem;
// <a href={this.props.product.link} className="list-item-ext-link">
//   <i className="fa fa-external-link"></i>
// </a>
// <p>{this.props.product.comments.length} comments</p>
// <TagsList product={this.props.product}/>
