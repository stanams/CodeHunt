var React = require('react');
var ApiUtil = require('../../util/api_util');

var VoteButton = React.createClass({

  getInitialState: function(){
    return({vote_count: this.props.productData.votes_count});
    // mettre ProductStore.find...  plutôt que d'utiliser la prop
  },

  handleVoteUp: function(){
    // debugger
    var productId = this.props.productData.id;
    var vote_state = (this.state.vote_count === this.props.productData.votes_count) ? "non voted" : "voted";
    if (vote_state === "non voted") {

      // addLIstener on componentdidmount sur le product store
      // après le vote ça va suivre tout el flux cycle du product
      

      this.setState({vote_count: this.props.productData.votes_count + 1});
      ApiUtil.createVote(productId);
    } else {
      this.setState({vote_count: this.state.vote_count - 1});
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
