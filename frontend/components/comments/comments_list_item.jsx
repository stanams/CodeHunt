var React = require('react');
var ApiUtil = require('../../util/api_util');
var UserStore = require('../../stores/user_store');

var CommentListItem = React.createClass ({

  // getInitialState: function(){
  //   return {
  //     commenter: UserStore.find(this.props.comment.commenter_id)
  //   };
  // },
  //
  // componentDidMount: function(){
  //   this.commentListener = UserStore.addListener(this._onChange);
  //   ApiUtil.fetchSingleUser(this.props.comment.commenter_id);
  // },
  //
  // componentWillUnmount: function(){
  //   this.commentListener.remove();
  // },
  //
  // _onChange: function(){
  //   this.setState({commenter: UserStore.find(this.props.comment.commenter_id)});
  // },

  render: function(){
    debugger
    return(
      <li>
        <div  className="comment-body">{this.props.comment.commenter}</div>
        <div  className="comment-body">{this.props.comment.body}</div>
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
