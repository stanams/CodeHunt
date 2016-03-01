var React = require('react');
var ApiUtil = require('../../util/api_util');
var ProductStore = require('../../stores/product_store');

var VoteButton = React.createClass({

  getInitialState: function(){
    return({vote_count: this.props.productData.votes_count});
  },

  componentDidMount: function(){
    this.productListener = ProductStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.productListener.remove();
  },

  _onChange: function(){
    this.setState({
      vote_count: this.props.productData.votes_count
    })
  },

  handleVoteUp: function(){
    debugger
    var theProduct = ProductStore.find(this.props.productData.id);
    var productId = theProduct.id;
    if (this.props.productData.voted) {
      this.setState({vote_count: this.state.vote_count - 1});
      ApiUtil.destroyVote(productId);
    } else {
      this.setState({vote_count: this.props.productData.votes_count + 1});
      ApiUtil.createVote(productId);
    }
  },

  render: function(){
    // debugger
    // var rightStyle = (this.state.vote_count === this.props.productData.votes_count) ? "upvote-button" : "upvote-button-clicked";
    // var appropriateClass = (this.props.params.productId) ? "product-page-upvote-button" : "upvote-button"
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
