var React = require('react');
var ApiUtil = require('../../util/api_util');
var ProductStore = require('../../stores/product_store');
var classNames = require('classnames');

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

  componentWillReceiveProps: function(newProps) {
    this.setState({vote_count: newProps.productData.votes_count})
    // I need this here because I've chosen to pass the theProduct
    // props thanks to this.state.theProduct. And state is changing inside the page
    // if I upvote, so I need to update that change of state.
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
    debugger
    var appropriateClass = (typeof this.props.params === "undefined") ? "upvote-button" : "product-page-upvote-button";
    var rightStyleCount = (typeof this.props.params === "undefined") ? "" : "number-of-votes";
    var voteClasses = classNames({"voted-vote": this.props.productData.voted,
                                  "count-vote-page": this.props.params });
    return(
      <div onClick={this.handleVoteUp} className={appropriateClass}>
        <div className={voteClasses}>
          <i className="fa fa-sort-asc up-icon"></i>
          <p className={rightStyleCount}>{this.state.vote_count}</p>
        </div>
      </div>
    );
  }
})

module.exports = VoteButton;

// # put "api/poducts/1/like"
