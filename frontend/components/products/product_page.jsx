var React = require('react');
var ProductStore = require('../../stores/product_store');
var ApiUtil = require('../../util/api_util');
var CommentList = require('../comments/comments_list');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var CommentBox = require('../comments/comments_box');


var ProductPage = React.createClass({

  getInitialState: function(){

    return {
      theProduct: ProductStore.find(
        parseInt(this.props.params.productId)
      )
    };

  },

  componentDidMount: function(){
    this.productStoreListener = ProductStore.addListener(this.productChange)
    var productId = parseInt(this.props.params.productId);
    if (ProductStore.find(productId) === undefined) {
      ApiUtil.fetchSingleProduct(productId);
    }
  },

  componentWillUnmount: function(){

    this.productStoreListener.remove();

  },

  productChange: function(){

    this.setState({
      theProduct: ProductStore.find(
        parseInt(this.props.params.productId)
      )

    })

  },

  render: function(){

    // var goodLink =
    // if (theProduct.link) {
    //
    // }

    // Later for the votes (will float: left;):
    // <section className="product-page-votes-box">
    //   21 upvotes
    //   <ul>
    //     <li className='product-page-upvotes'></li>
    //     <li className='product-page-upvotes'></li>
    //     <li className='product-page-upvotes'></li>
    //   </ul>
    // </section>
    if (!this.state.theProduct) {
      debugger
      return <div></div>;
    } else {

    return(
        <div className="big-div-product-page">
          <Link to="/"><p className="leave-product-page-button">x</p></Link>
          <div className="product-page-container">
            <section className="product-page-info">
              <div className="product-info-wrapper">
                <div className="product-name-product-page">{this.state.theProduct.name}</div>
                <div className="product-description-product-page">{this.state.theProduct.description}</div>
                <a className="try-it-btn" href={this.state.theProduct.link}><div className="product-link-product-page">Try It</div></a>
              </div>
            </section>
            <CommentBox productId={this.props.params.productId}/>

          </div>
        </div>
      );
    }
  }
})

module.exports = ProductPage;
