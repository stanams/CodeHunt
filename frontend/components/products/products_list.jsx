var React = require('react');
var ProductStore = require('../../stores/product_store');
var ApiUtil = require('../../util/api_util');

var ProductsList = React.createClass({
  getInitialState: function(){
    return {products: ProductStore.all()};
  },

  _onChange: function(){
    this.setState({products: ProductStore.all()});
  },

  componentDidMount: function(){
    this.productListener = ProductStore.addListener(this._onChange);
    ApiUtil.fetchAllProducts();
  },

  render: function(){
    var productList = this.state.products.map(function(product, idx){
      return (<li className="index-products-list" key={idx}>{product.name}: {product.description}</li>);
    })
    return(

      <ul>
        {productList}
      </ul>
    );
  }
});

module.exports = ProductsList;
