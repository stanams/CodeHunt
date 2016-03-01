var ProductActions = require('../actions/product_actions');
var CommentActions = require("../actions/comment_actions");
var UserActions = require("../actions/user_actions");
var VoteAction = require("../actions/vote_actions");

module.exports = {

// ------------ Product requets-------------------

  fetchAllProducts: function(){
    $.ajax({
      url: '/api/products',
      success: function(products){
        ProductActions.receiveAllProducts(products);
      }
    })
  },

  fetchSingleProduct: function(id){
    $.ajax({
      url: '/api/products/' + id,
      success: function(product){
        ProductActions.receiveSingleProduct(product)
      }
    })
  },

  createProduct: function(product, callback){
    $.ajax({
      url: '/api/products',
      method: "POST",
      data: {product: product},
      success: function(){
        ProductActions.receiveSingleProduct(product);
        callback && callback(product.id);
      }
    })
  },

  // ------------ Comment requets -------------------

  fetchComments: function(id){
    $.ajax({
      url: "/api/products/" + id + "/comments",
      type: "GET",
      success: function(comments) {
        CommentActions.receiveComments(comments);
      }
    });
  },

  createComment: function(comment, productId){
    // debugger
    $.ajax({
      url: "/api/products/" + productId + "/comments",
      type: "POST",
      data: {comment: comment},
      success: function(comment) {
        debugger
        CommentActions.postComment(comment);
      }
    });
  },


  // deleteComment: function(id){
  //   $.ajax({
  //     url: "/api/comments/" + id,
  //     type: "DELETE",
  //     success: function(comment) {
  //       CommentActions.deleteComment(comment);
  //     }
  //   });
  // }



// ------------ User requets -------------------

fetchUsersByIds: function(idsArray){
  stringified = idsArray.join(',');
  $.ajax({
    url: "/api/users?users_list=" + stringified,
    type: "GET",
    success: function(response) {
      UserActions.receiveFilteredUsers(response);
    },
  });
},

  fetchSingleUser: function(id){
    $.ajax({
      url: '/api/users/' + id,
      success: function(user){
        UserActions.receiveSingleUser(user)
      }
    })
  },

// ------------ Votes requets -------------------

  createVote: function(productId){
    $.ajax({
      url: "/api/products/" + productId + "/like",
      type: "POST",
      success: function(productId) {
        VoteAction.createVote(productId);
      },
    });
  },


  // createVoteFromProductPage?

  // createVoteFromIndex: function(productId){
  //   $.ajax({
  //     url: "/api/products/" + productId + "/like",
  //     type: "POST",
  //     success: function(productId) {
  //       VoteAction.createVote(productId);
  //     },
  //   });
  // },

  destroyVote: function(productId){
    $.ajax({
      url: "/api/products/" + productId + "/unlike",
      type: "DELETE",
      success: function(productId) {
        VoteAction.destroyVote(productId);
      },
    });
  }

}
