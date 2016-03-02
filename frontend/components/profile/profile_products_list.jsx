var React = require('react');
var ProductStore = require('../../stores/product_store');
var ProductsListItem = require('../products/products_list_item');


var ProfileProductsList = React.createClass({

  render: function(){
    if (this.props.selectedTab === "Votes") {
      var productsList = this.props.user.voted_products.map(function(product, idx){
        return <ProductsListItem key={idx} product={product} />
        });
    } else {
      var productsList = this.props.user.products.map(function(product, idx){
        return <ProductsListItem key={idx} product={product} />
        });
    }
    return(
      <ul className="tab-label-container">
            {productsList}
      </ul>


    );
  }
})

module.exports = ProfileProductsList;
