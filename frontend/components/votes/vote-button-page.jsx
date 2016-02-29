var React = require('react');

var VoteButtonPage = React.createClass({
  getInitialState: function(){
    debugger
    return({vote_count: this.props.voteCount});
  },

  handleVoteUp: function(){
    var vote_state = (this.state.vote_count === this.props.voteCount) ? "non voted" : "voted";
    if (vote_state === "non voted") {
      this.setState({vote_count: this.state.vote_count + 1});
    } else {
      this.setState({vote_count: this.state.vote_count - 1});
    }
  },

  render: function(){
    return(
      <div onClick={this.handleVoteUp} className="product-page-upvote-button">
        <i className="fa fa-sort-asc up-icon-product-page"></i>
        <p className="product-page-votes-count">{this.state.vote_count}</p>
      </div>
    );
  }

})

module.exports = VoteButtonPage;
