var React = require('react');
var ProfileProductsList = require('./profile_products_list');

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
    var rightClass = (this.state.selectedTab === "Votes") ? "votes-tab" : "posts-tab";

    return(
      <div>
        <ul className="tab-label-container">
          <li className="votes-tab" onClick={this.clickOnVotesTab}>Votes</li>
          <li className="posts-tab" onClick={this.clickOnPostsTab}>Posts</li>
        </ul>
        <ProfileProductsList selectedTab={this.state.selectedTab} user={this.props.user} products={this.props.products}/>
      </div>

    );
  }
})

module.exports = TabLabels;
