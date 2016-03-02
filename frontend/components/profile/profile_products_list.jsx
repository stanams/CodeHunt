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
      <ul>
        {productsList}
      </ul>


    );
  }
})

module.exports = ProfileProductsList;
// var votedProdcutsSorted = this.props.user.voted_products.sort(function(a, b){
//   if (a.votes_count < b.votes_count) {
//     return 1;
//   } else if (a.votes_count >= b.votes_count) {
//     return -1;
//   } else {
//     return 0;
//   }
// };
// var productsList = votedProdcutsSorted.map(function(product, idx){
//   return <ProductsListItem key={idx} product={product} />
//   });
//
//
//   var votedProdcutsSorted = this.props.user.products.sort(function(a, b){
//     if (a.votes_count < b.votes_count) {
//       return 1;
//     } else if (a.votes_count >= b.votes_count) {
//       return -1;
//     } else {
//       return 0;
//     }
//   };
//   var productsList = votedProdcutsSorted.map(function(product, idx){
//     return <ProductsListItem key={idx} product={product} />
//     });
