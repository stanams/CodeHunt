var React = require('react');
var Header = require('./header');
var ProductsList = require('./products/products_list');
var ProductPreview = require('./products/product_preview');

var IndexView = React.createClass({
  render: function(){
    return(
      <div>
        <Header/>
        <img className="homepage-image" src="http://res.cloudinary.com/codehunt/image/upload/v1457111580/codesplash_-_copie_f4e5zw.jpg"></img>
        <ProductsList />

      </div>
    );
  }
})

module.exports = IndexView;

// Pour faire la modale, rajouter la <ProductPreview />
