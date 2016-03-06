var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  receiveComments: function(comments){
    Dispatcher.dispatch({
      actionType: "COMMENTS_RECEIVED",
      comments: comments
    });
  },

  postComment: function(comment){
    // debugger
    Dispatcher.dispatch({
      actionType: "COMMENT_POSTED",
      comment: comment
    });
  }

  // deleteComment: function(idx){
  //   Dispatcher.dispatch({
  //     actionType: "COMMENT_DELETED",
  //     idx: idx
  //   });
  // }

}
