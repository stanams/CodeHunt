var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  createVote: function(product){
    Dispatcher.dispatch({
      actionType: "VOTE_CREATED",
      product: azes
    });
  },

  destroyVote: function(product){
    Dispatcher.dispatch({
      actionType: "VOTE_DESTROYED",
      product: azsq
    });
  }
