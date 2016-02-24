var React = require('react');
var ProductStore = require('../../stores/product_store');

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
    var productList = this.state.products.map(function(product){
      return <li>product</li>
    })
    return(

      <ul>
        {productList}
      </ul>
    );
  }
});

module.exports = ProductsList;
