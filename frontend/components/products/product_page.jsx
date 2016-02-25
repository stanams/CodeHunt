var React = require('react');
var ProductStore = require('../../stores/product_store');
var Header = require('../header');

var ProductPage = React.createClass({

  render: function(){
    var productId = parseInt(this.props.params.productId);
    var theProduct = ProductStore.find(productId);

    return(
      <div>
        <Header/>
        <div className="product-page-container">
          <section className="product-page-info">
            <div>{theProduct.name}</div>
            <div>{theProduct.description}</div>
            <div>{theProduct.link}</div>
          </section>


          <section className="product-page-votes-box">
            21 upvotes
            <ul>
              <li className='product-page-upvotes'></li>
              <li className='product-page-upvotes'></li>
              <li className='product-page-upvotes'></li>
            </ul>
          </section>

          <section className="product-page-comments-box">
            Comments
          </section>
        </div>
      </div>
    );
  }
})

module.exports = ProductPage;
