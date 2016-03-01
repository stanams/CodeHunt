var React = require('react');

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var ProductConstants = require('../constants/product_constants');
var ProductStore = new Store(Dispatcher);
var ApiUtil = require('../util/api_util');
var VoteConstants = require('../constants/vote_constants');



var _products = {};
var productsByUserId = {};
// var _orderedProducts = [];

var resetProducts = function (products) {
  productsByUserId = {};
  _products = {};
  products.forEach(function (product) {
    _products[product.id] = product;
    if (typeof productsByUserId[product.author_id] === "undefined") {
      productsByUserId[product.author_id] = [product];
    } else {
      productsByUserId[product.author_id].push(product);
    }
  });
};

var resetProduct = function (product) {
  _products[product.id] = product;
};

ProductStore.findByUserId = function(id){
  return productsByUserId[id];
};

ProductStore.getSorted = function(){
  var ary = [];
  for (var key in _products) {
    ary.push(_products[key]);
  };
  return ary.sort(function(a, b){
    if (a.votes_count < b.votes_count) {
      return 1;
    } else if (a.votes_count >= b.votes_count) {
      return -1;
    } else {
      return 0;
    }
  });
};

// var resetProductsFromUser = function(user) {
//  var postedProducts = [];
//   user.products.map(function(product){
//      postedProduct.push(product);
//    });
//   resetProducts(products);
// };


ProductStore.all = function () {
  var products = [];
  for (var id in _products) {
    products.push(_products[id]);
  }
  return products;
}

ProductStore.find = function (id) {
  return _products[id];
}

ProductStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProductConstants.PRODUCTS_RECEIVED:
      resetProducts(payload.products);
      ProductStore.__emitChange();
      break;
    case ProductConstants.PRODUCT_RECEIVED:
      resetProduct(payload.product);
      ProductStore.__emitChange();
      break;
    case VoteConstants.VOTE_CREATED:
      resetProduct(payload.product);
      ProductStore.__emitChange();
      break;
    case VoteConstants.VOTE_DESTROYED:
      resetProduct(payload.product);
      ProductStore.__emitChange();
      break;
  }
}


module.exports = ProductStore;
