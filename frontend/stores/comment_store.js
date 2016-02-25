var React = require('react');

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var CommentStore = new Store(Dispatcher);
var ApiUtil = require('../util/api_util');
var CommentConstants = require('../constants/comment_constants');

var _comments = {};

var resetComments = function (comments) {
  _comments = {};
  comments.forEach(function (comment) {
    _comments[comment.id] = comment;
  });
};

var postComment = function (comment) {
  _comments[comment.id] = comment;
};

var deleteComment = function(idx){
  delete _comments[idx];
}

CommentStore.all = function () {
  var comments = [];
  for (var id in _comments) {
    comments.push(_comments[id]);
  }
  return comments;
}

CommentStore.find = function (id) {
  return _comments[id];
}

CommentStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
      resetComments(payload.comments);
      CommentStore.__emitChange();
      break;
    case CommentConstants.COMMENT_POSTED:
      postComment(payload.comment);
      CommentStore.__emitChange();
      break;
    case CommentConstants.COMMENT_DELETED:
      deleteComment(payload.comment);
      CommentStore.__emitChange();
      break;
  }
}


module.exports = CommentStore;
