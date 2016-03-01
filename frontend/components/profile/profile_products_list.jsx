var React = require('react');
var ProductStore = require('../../stores/product_store');
var ProductsListItem = require('../products/products_list_item');


var ProfileProductsList = React.createClass({

  render: function(){
    debugger
    var productsList = this.props.user.products.map(function(product, idx){
      return <ProductsListItem key={idx} productFromProfile={product} />;
    })
    return(
      <ul>
        {productsList}
      </ul>
    );
  }
})

module.exports = ProfileProductsList;
