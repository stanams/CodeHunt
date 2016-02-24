var Dipsatcher = require('../dispatcher/dispatcher');
var ProductConstants = require('../constants/product_constants');

module.exports = {

  receiveAllProducts: function(){
    Dispatcher.dispatch({
      actionType: ProductConstants.PRODUCTS_RECEIVED,
      products: products
    });
  },

  receiveSingleProduct: function(){
    Dispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_RECEIVED,
      product: product
    });
  },

  createProduct: function(){
    Dispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_CREATED,
      product: product
    });
  },

  updateProduct: function(){
    Dispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_UPDATED,
      product: product
    });
  },

}
