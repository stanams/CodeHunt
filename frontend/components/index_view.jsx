var React = require('react');
var Header = require('./header');
var ProductsList = require('./products/products_list');
var ProductPreview = require('./products/product_preview');

var IndexView = React.createClass({
  render: function(){
    return(
      <div>
        <Header />
        <img src="assets/codesplash"></img>
        <ProductsList />
        <ProductPreview />
      </div>
    );
  }
})

module.exports = IndexView;
