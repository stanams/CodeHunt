var React = require('react');
var ApiUtil = require('../../util/api_util');

var CommentListItem = React.createClass ({

  delete: function(e){
    e.preventDefault();
    ApiUtil.deleteComment(this.props.comment.id);
  },

  renderDelete: function(){
    return <button onClick={this.delete}>Delete</button>
  },

  render: function(){
    debugger
    return(
      <li>

        <div>{this.props.comment.body}</div>
        {this.renderDelete()}
      </li>
    );
  }
})

// Add the commenter name
// <div>{this.props.comment.commenter.username}</div>

module.exports = CommentListItem;
