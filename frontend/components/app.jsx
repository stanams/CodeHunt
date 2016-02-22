var React = require('react');
var Header = require('./header');
var ProductList = require('./products/products_list');

var App = React.createClass({
  render: function(){
    return(
      <Header />
      <ProductsList />
    );
  }
})

module.exports = App;
