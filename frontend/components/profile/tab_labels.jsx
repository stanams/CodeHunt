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
    } else {
      voteTabClasses = "votes-tab"
      postTabClasses = "posts-tab tab-selected";
    }


    return(
      <div>
        <ul className="tab-label-container">
          <li className={voteTabClasses} onClick={this.clickOnVotesTab}>
            <span className="tab-label">
              {this.props.user.voted_products.length}
            </span>
            <br></br>
            <span className="tab-label">
              Votes
            </span>
          </li>
          <li className={postTabClasses} onClick={this.clickOnPostsTab}>
            <span className="tab-label">
              {this.props.user.products.length}
            </span>
            <br></br>
            <span className="tab-label">
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
