var React = require('react');
var ApiUtil = require('../../util/api_util');
var ProductStore = require('../../stores/product_store');

var VoteButton = React.createClass({

  getInitialState: function(){
    return({vote_count: ProductStore.find(this.props.productData.id).votes_count});
  },

  componentDidMount: function(){
    if (this.props.productId) {
      ApiUtil.fetchSingleProduct(this.props.productId);
    } else {
      ApiUtil.fetchAllProducts();
    }
    this.productListener = ProductStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.productListener.remove();
  },

  _onChange: function(){
    this.setState({
      vote_count: ProductStore.find(this.props.productData.id).votes_count
    })
  },

  handleVoteUp: function(){
    // debugger
    var theProduct = ProductStore.find(this.props.productData.id);
    var productId = theProduct.id;
    var vote_state = (this.state.vote_count === theProduct.votes_count) ? "non voted" : "voted";
    if (vote_state === "non voted") {
      this.setState({vote_count: this.props.productData.votes_count + 1});
      ApiUtil.createVote(productId);
    } else {
      this.setState({vote_count: this.state.vote_count - 1});
      ApiUtil.destroyVote(productId);
    }
  },

  render: function(){
    // var classNamee = (this.state.vote_count === this.props.productData.votes_count) ? "upvote-button" : "upvote-button-clicked";

    return(
      <div onClick={this.handleVoteUp} className="upvote-button">
        <i className="fa fa-sort-asc up-icon"></i>
        <p>{this.state.vote_count}</p>
      </div>
    );
  }
})

module.exports = VoteButton;

// # put "api/poducts/1/like"
