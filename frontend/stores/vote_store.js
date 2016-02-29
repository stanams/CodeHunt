var React = require('react');

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var VoteConstants = require('../constants/vote_constants');
var VoteStore = new Store(Dispatcher);
var ApiUtil = require('../util/api_util');
var ProductStore = require('./product_store');

VoteStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case VoteConstants.VOTE_CREATED:
      ProductStore.resetProdut(paylaod.product);
      VoteStore.__emitChange();
    break;
    case VoteConstants.VOTE_DESTROYED:
      ProductStore.(paylaod.product);
      VoteStore.__emitChange();
    break;
  }
}



module.exports = VoteStore;
