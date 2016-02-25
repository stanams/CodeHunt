var React = require('react');
var ProductStore = require('../../stores/product_store');
var ApiUtil = require('../../util/api_util');
var ProductsListItem = require('./products_list_item');

var ProductsList = React.createClass({
  getInitialState: function(){
    return {products: ProductStore.all()};
  },

  componentDidMount: function(){
    this.productListener = ProductStore.addListener(this._onChange);
    ApiUtil.fetchAllProducts();
  },

  componentWillUnmout: function(){
    this.productListener = ProductStore.removeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({products: ProductStore.all()});
  },

  render: function(){
    // var productPreview =
    // TODO: if statement: si this.props.product.id est undefined, on renvoit une empty div,
    // sinon, on génère le ProductPreview component avec les right data: rajouter {productPreview} après l'ul
    var productList = this.state.products.map(function(product, idx){
      return <ProductsListItem key={idx} product={product} />;
    })
    return(
        <ul>
          {productList}
        </ul>
    );
  }
});

module.exports = ProductsList;
