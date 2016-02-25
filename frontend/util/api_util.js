var ApiActions = require('../actions/product_actions');
var CommentActions = require("../actions/comment_actions");

module.exports = {

// ------------ Product requets-------------------

  fetchAllProducts: function(){
    $.ajax({
      url: '/api/products',
      success: function(products){
        ApiActions.receiveAllProducts(products);
      }
    })
  },

  fetchSingleProduct: function(id){
    $.ajax({
      url: '/api/products/' + id,
      success: function(){
        ApiActions.receiveSingleProduct(product)
      }
    })
  },

  createProduct: function(product, callback){
    $.ajax({
      url: '/api/products',
      method: "POST",
      data: {product: product},
      success: function(){
        ApiActions.receiveSingleProduct(product);
        // this.navigateToIndex();
        callback && callback(product.id);
      }
    })
  }

  // ------------ Comment requets -------------------

  fetchComments: function(id){
    $.ajax({
      url: "api/comments/" + id,
      type: "GET",
      success: function(comments) {
        CommentActions.receiveComments(comments);
      }
    });
  }

  createComment: function(comment){
    $.ajax({
      url: "api/comments/",
      type: "POST",
      success: function(comment) {
        CommentActions.postComment(comment);
      }
    });
  }

  destroyComment: function(id){
    $.ajax({
      url: "api/comments/" + id,
      type: "DELETE",
      success: function(comments) {
        CommentActions.deleteComment(comments);
      }
    });
  }
}
