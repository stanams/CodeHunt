var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');



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
    var comment = {};
    $.extend(comment, this.state);
    ApiUtil.createComment(comment, function(id){
      browserHistory.push(makeUrl());
    });
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


module.exports = CommentForm;
