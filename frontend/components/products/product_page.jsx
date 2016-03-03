var React = require('react');
var ProductStore = require('../../stores/product_store');
var ApiUtil = require('../../util/api_util');
var CommentList = require('../comments/comments_list');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var CommentBox = require('../comments/comments_box');
var VotesBox = require('../votes/votes_box');
var VoteButton = require('../votes/vote-button');

var ProductPage = React.createClass({

  getInitialState: function(){
    // debugger
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

    if (!this.state.theProduct) {
      return <div>Loading...</div>;
    } else {

    return(
        <div className="big-div-product-page">
          <div className="product-page-container">
            <section className="product-page-info">

                <Link to="/"><p className="leave-product-page-button">x</p></Link>
                <div className="product-info-wrapper">
                  <div className="product-name-product-page">
                    {this.state.theProduct.name}
                  </div>
                  <div className="product-description-product-page">
                    {this.state.theProduct.description}
                  </div>

                  <div className="btn-and-link">
                    <VoteButton productData={this.state.theProduct} params={this.props.params}/>

                    <a className="try-it-btn"
                       href={this.state.theProduct.link}
                       target="_blank">
                         <div className="product-link-product-page">
                           Try It
                         </div>
                     </a>
                   </div>
                </div>
            </section>
            <div className="product-body-wrapper">
              <CommentBox productId={this.props.params.productId}/>
              <VotesBox productData={this.state.theProduct}/>
            </div>
          </div>
        </div>
      );
    }
  }
})

// Give the props to the VotesBox voters={this.state.theProduct.voters}
// <img src={this.state.theProduct.image} className="product-picture"/>
// put line 52 but fix space

module.exports = ProductPage;
