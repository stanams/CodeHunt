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

    if (this.state.selectedTab === "Votes") {
      voteTabClasses = "votes-tab tab-selected";
      postTabClasses = "posts-tab";
      voteNbClass = "tab-label tab-label-nb vote-nb-selected";
      postNbClass = "tab-label tab-label-nb post-nb-non-selected";
    } else {
      voteTabClasses = "votes-tab"
      postTabClasses = "posts-tab tab-selected";
      postNbClass = "tab-label tab-label-nb post-nb-selected";
      voteNbClass = "tab-label tab-label-nb vote-nb-non-selected";
    }

    return(
      <div>
        <ul className="tab-label-container">
          <li className={voteTabClasses} onClick={this.clickOnVotesTab}>
            <span className={voteNbClass}>
              {this.props.user.voted_products.length}
            </span>
            <br></br>
            <span className="tab-label tab-label-name">
              Votes
            </span>
          </li>
          <li className={postTabClasses} onClick={this.clickOnPostsTab}>
            <span className={postNbClass}>
              {this.props.user.products.length}
            </span>
            <br></br>
            <span className="tab-label tab-label-name">
              Posts
            </span>
          </li>
        </ul>
        <ProfileProductsList selectedTab={this.state.selectedTab} user={this.props.user} products={this.props.products}/>
      </div>

    );
  }
})

module.exports = TabLabels;
