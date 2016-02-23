var React = require('react');
var Header = require('./header/header');
var ProductsList = require('./products/products_list');

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Header />
        <ProductsList />
      </div>
    );
  }
});

module.exports = App;
