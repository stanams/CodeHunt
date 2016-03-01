var React = require('react');

var TabLabels = React.createClass({
  getInitialState: function(){
    return({selectedTab: "Votes"});
  },

  clickOnPostsTab: function(){
    this.setState({selectedTab: "Posts"});
  },

  clickOnVotesTab: function(){
    this.setState({selectedTab: "Votes"});
  },

  render: function(){
    return(
      <ul className="tab-label-container">
        <li className="votes-tab" onClick={this.clickOnVotesTab}>Votes</li>
        <li className="posts-tab" onClick={this.clickOnPostsTab}>Posts</li>
      </ul>
    );
  }
})

module.exports = TabLabels;
