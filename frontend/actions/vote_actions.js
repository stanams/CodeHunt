var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  createVote: function(product){
    Dispatcher.dispatch({
      actionType: "VOTE_CREATED",
      product: product
    });
  },

  destroyVote: function(product){
    Dispatcher.dispatch({
      actionType: "VOTE_DESTROYED",
      product: product
    });
  }
