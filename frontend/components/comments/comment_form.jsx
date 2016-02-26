var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var browserHistory = require('react-router').browserHistory;
var ProductStore = require('../../stores/product_store');



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
    var productId = parseInt(this.props.productId);
    var product = ProductStore.find(productId);
    var commenter_id = product.author_id;
    // debugger
    var comment = {
      product_id: productId,
      commenter_id: commenter_id
      };
    $.extend(comment, this.state);
    ApiUtil.createComment(comment, productId, function(productId) {
      browserHistory.push(makeUrl());
    });
    this.setState({body: ''});
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
