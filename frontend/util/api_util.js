var ApiActions = require('../actions/product_actions');

module.exports = {
  fetchAllProducts: function(){
    $.ajax({
      url: 'api/products',
      success: function(products){
        ApiActions.receiveAllProducts(products);
      }
    })
  },

  fetchSingleProduct: function(id){
    $.ajax({
      url: 'api/products' + id,
      success: function(){
        ApiActions.receiveSingleProduct(product)
      }
    })
  },

  createProduct: function(product, callback){
    $.ajax({
      url: 'api/products',
      method: "POST",
      data: {product: product},
      success: function(){
        ApiActions.receiveSingleProduct(product);
        callback && callback(product.id);
      }
    })
  }
  // TODO: update story
}
