var React = require('react');

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var VoteConstants = require('../constants/vote_constants');
var VoteStore = new Store(Dispatcher);
var ApiUtil = require('../util/api_util');


var _votes = {};

var resetVotes = function (votes) {
  _votes = {};
  votes.forEach(function (vote) {
    _votes[vote.id] = vote;
  });
};

var resetVote = function (vote) {
  _votes[vote.id] = vote;
};

VoteStore.allFromProduct = function(){

}

VoteStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case VoteConstants.VOTE_CREATED:
      resetVotes(paylaod.votes);
      VoteStore.__emitChange();
    break;
    case VoteConstants.VOTE_DESTROYED:
      resetVotes(paylaod.votes);
      VoteStore.__emitChange();
    break;
  }
}



module.exports = VoteStore;
