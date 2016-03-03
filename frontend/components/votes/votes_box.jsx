var React = require('react');
var browserHistory = require('react-router').browserHistory;

var VotesBox = React.createClass({

  makeProfileUrl: function(){
    var path = "/users/" + this.props.productData.author.id;
    return path;
  },

  handleProfileClick: function(){
    browserHistory.push(this.makeProfileUrl());
    window.scrollTo(0,0);
  },

  render: function(){
    debugger
    var votersList = this.props.productData.voters.map(function(voter, idx){
      return (<li onClick={this.handleProfileClick} key={idx} className="mid-cropper voters-list-item">
                <img className="small-profile-pic" src={voter.profile_pic}/>
              </li>)
    });

    return(
      <div className="votes-count-container-product-page">
          <h3 className="votes-title">{this.props.productData.votes_count} VOTES</h3>
          <ul className="voters-list">
            {votersList}
          </ul>
      </div>
    );
  }
})

module.exports = VotesBox;
