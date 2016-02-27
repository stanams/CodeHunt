var React = require('react');
var CommentStore = require('../../stores/comment_store');
var ApiUtil = require('../../util/api_util');
var CommentListItem = require('./comments_list_item');
var CommentForm = require('./comment_form');

var CommentList = React.createClass({
  getInitialState: function(){
    return {comments: CommentStore.all()};
  },

  componentDidMount: function(){
    ApiUtil.fetchComments(this.props.productId);
    this.productListener = CommentStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.productListener.remove();
  },

  _onChange: function(){
    debugger
    this.setState({
      comments: CommentStore.all()
    });
  },

  renderComments: function(){
    var _renderComments;
    if (this.state.comments === {}) {
      _renderComments = ["loading..."];
    } else {
      _renderComments = Object.keys(this.state.comments).map(function(idx){
        return (
          <CommentListItem key={idx} comment={this.state.comments[idx]} />
        )
        }.bind(this))
      }
    return _renderComments;
  },

  render: function(){
    return(
      <div>
        <ul className="comments-list">
          {this.renderComments()}
        </ul>
      </div>
    );
  }

});

module.exports = CommentList;
