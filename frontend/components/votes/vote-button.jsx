var React = require('react');


var VoteButton = React.createClass({

  getInitialState: function(){
    return({vote_count: this.props.productData.votes_count});
  },

  handleVoteUp: function(){
    var vote_state = (this.state.vote_count === this.props.productData.votes_count) ? "non voted" : "voted";
    if (vote_state === "non voted") {
      this.setState({vote_count: this.props.productData.votes_count + 1});
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
