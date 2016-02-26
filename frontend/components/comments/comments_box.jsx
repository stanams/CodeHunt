var React = require('react');
var React = require('react');
var ApiUtil = require('../../util/api_util');
var CommentForm = require('./comment_form');
var CommentList = require('./comments_list');

var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="comments-container">
        <h3 className="discussion-title">DISCUSSION</h3>
        <CommentList productId={this.props.productId}/>
        <CommentForm productId={this.props.productId}/>
      </div>

    );
  }
});

module.exports = CommentBox;
