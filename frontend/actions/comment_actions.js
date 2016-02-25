var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  receiveComments: function(comments){
    Dispatcher.dispatch({
      actionType: "COMMENT_RECEIVED",
      comments: comments
    });
  },

  postComment: function(comment){
    Dispatcher.dispatch({
      actionType: "COMMENT_POSTED",
      comments: comments
    });
  },

  deleteComment: function(comment){
    Dispatcher.dispatch({
      actionType: "COMMENT_RECEIVED",
      comments: comments
    });
  }

}
