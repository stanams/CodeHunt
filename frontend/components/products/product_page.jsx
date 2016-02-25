var React = require('react');
var ProductStore = require('../../stores/product_store');
var Header = require('../header');
var ApiUtil = require('../../util/api_util');

var ProductPage = React.createClass({


  render: function(){
    var productId = parseInt(this.props.params.productId);
    if (ProductStore.find(productId) === undefined) {
      ApiUtil.fetchSingleProduct(productId);
    }
    var theProduct = ProductStore.find(productId);

    // var goodLink =
    // if (theProduct.link) {
    //
    // }


    return(
      <div>
        <Header/>
        <div className="product-page-container">
          <section className="product-page-info">
            <div className="product-info-wrapper">
              <div className="product-name-product-page">{theProduct.name}</div>
              <div className="product-description-product-page">{theProduct.description}</div>
              <a className="try-it-btn" href={theProduct.link}><div className="product-link-product-page" >Try It</div></a>
            </div>
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
