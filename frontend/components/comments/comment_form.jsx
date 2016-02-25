var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');



var CommentForm = React.createClass({

  blankAttrs: {
    rating: 0,
    review: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createComment: function(e){
    e.preventDefault();
    var comment = {};
    Object.keys(this.state).forEach(function(key){
      {comment[key] = this.state[key];}
    }.bind.(this))
    comment["product_id"] = this.props.productId;
    ApiUtil.createComment(comment);
    this.setState(this.blankAttrs)
  },

  render: function(){
    return(
      <form>
        <input type="text" valueLink={this.linkState("comment")}/>
        <br/>
        <button onClick={this.createComment}>Comment</button>
      </form>
    );
  }



})
