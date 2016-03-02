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

  decideClick: function(){
    if (this.state.selectedTab === "Votes") {
      this.clickOnPostsTab();
    } else {
      this.clickOnVotesTab();
    }
  },

  render: function(){
    var rightClass = (this.state.selectedTab === "Votes") ? "votes-tab" : "posts-tab";

    return(
      <ul className="tab-label-container">
        <li className={rightClass} onClick={this.decideClick}>{this.state.selectedTab}</li>
          <ProfileProductsList selectedTab={this.state.selectedTab} user={this.props.user} products={this.props}/>
      </ul>

    );
  }
})

module.exports = TabLabels;
