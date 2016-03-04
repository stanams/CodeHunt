var React = require('react');
var browserHistory = require('react-router').browserHistory;

var VotesBox = React.createClass({

  makeProfileUrl: function(voterId){
    var path = "/users/" + voterId;
    return path;
  },

  handleProfileClick: function(voterId){
    browserHistory.push(this.makeProfileUrl(voterId));
    window.scrollTo(0,0);
  },

  render: function(){
    // debugger
    var votersList = this.props.productData.voters.map(function(voter, idx){
      return (<li key={idx} className="mid-cropper voters-list-item">
                <img onClick={this.handleProfileClick.bind(null, voter.id)} className="small-profile-pic" src={voter.profile_pic}/>
              </li>)
    }.bind(this));

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
