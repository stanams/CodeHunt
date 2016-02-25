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
    return(
      <li>
        <div>{this.props.comment.user.username}</div>
        <div>{this.props.comment.comment}</div>
        {this.renderDelete()}
      </li>
    );
  }
})

module.export = CommentListItem;
