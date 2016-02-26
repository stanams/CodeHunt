var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var browserHistory = require('react-router').browserHistory;



var CommentForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {};
  },

  makeUrl: function(){
    var path = "/products/" + this.props.productId;
    return path;
  },

  createComment: function(e){
    e.preventDefault();
    var comment = {
      product_id: this.props.productId,
      commenter_id: 1
      };
    $.extend(comment, this.state);
    ApiUtil.createComment(comment, function(producId){
      browserHistory.push(makeUrl());
    });
  },

  render: function(){
    return(
      <form className="comment-form">
        <input className="comment-form-input"
          placeholder="What do you think about that product?"
          type="textarea" valueLink={this.linkState("body")}/>
        <button className="comment-form-btn" onClick={this.createComment}></button>
      </form>
    );
  }
})


module.exports = CommentForm;
