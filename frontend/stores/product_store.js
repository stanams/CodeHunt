var React = require('react');

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var ProductConstants = require('../constants/productConstants.js');
var ProductStore = new Store(AppDispatcher);

var _products = {};

var resetProducts = function (products) {
  _products = {};
  products.forEach(function (product) {
    _products[product.id] = product;
  });
};

var resetProduct = function (product) {
  _products[product.id] = product;
};

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
    case ProductConstants.POKEMONS_RECEIVED:
      resetProducts(payload.products);
      ProductStore.__emitChange();
      break;
    case ProductConstants.POKEMON_RECEIVED:
      resetProduct(payload.product);
      ProductStore.__emitChange();
      break;
  }
}


module.exports = ProductStore;
