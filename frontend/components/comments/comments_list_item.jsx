var React = require('react');
var ApiUtil = require('../../util/api_util');

var CommentListItem = React.createClass ({

  render: function(){
    return(
      <li>
        <div  clasName="comment-body">{this.props.comment.body}</div>
      </li>
    );
  }
})

module.exports = CommentListItem;


// <div>{this.props.comment.commenter.username}</div>

// delete: function(e){
//   e.preventDefault();
//   ApiUtil.deleteComment(this.props.comment.id);
// },

// Re-put the delete option later (method)
// renderDelete: function(){
//   return <button onClick={this.delete}>Delete</button>
// }

// Re-put the delete option later (render)
// {this.renderDelete()}

// Add the commenter name
