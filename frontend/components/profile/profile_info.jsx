var React = require('react');

var ProfileInfos = React.createClass({



  render: function(){

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
})

module.exports = ProfileInfos;
