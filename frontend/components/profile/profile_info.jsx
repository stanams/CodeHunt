var React = require('react');
var browserHistory = require('react-router').browserHistory;

var ProfileInfos = React.createClass({



  makeEditProfileUrl: function(){
    var path = "/users/" + this.props.user.id + "/edit";
    return path;
  },

  handleEditClick: function(){
    browserHistory.push(this.makeEditProfileUrl());
    window.scrollTo(0,0);
  },

  render: function(){
    if (this.props.user.current_user.id === this.props.user.id) {
      return(
        <div className="profile-info-container">
          <img src={this.props.user.image}/>
          <div className="profile-info-data">
            {this.props.user.username}
            <br></br>
            <div className="user-description">
              {this.props.user.bio}
            </div>
            <div className="edit-button-profile" onClick={this.handleEditClick}><i className="fa fa-pencil"></i> edit</div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="profile-info-container">
          <div className="profile-info-data">
            {this.props.user.username}
            <br></br>
            <div className="user-description">
              {this.props.user.bio}
            </div>
          </div>
        </div>
      );
    }
  }
})

module.exports = ProfileInfos;
