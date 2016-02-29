var React = require('react');
var UserStore = require('../../stores/user_store');
var ApiUtil = require('../../util/api_util');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ProfileInfos = require('./profile_info');
var ProfileTab = require('./profile_tab');
var Header = require('../header');

var ProfilePage = React.createClass({

  getInitialState: function(){
    // debugger
    return {
      user: UserStore.find(
        parseInt(this.props.params.userId)
      )
    };
  },

  componentDidMount: function(){
    this.userStoreListener = UserStore.addListener(this.userChange)
    var userId = parseInt(this.props.params.userId);
    if (UserStore.find(userId) === undefined) {
      ApiUtil.fetchSingleUser(userId);
    }
  },

  componentWillUnmount: function(){
    this.userStoreListener.remove();
  },

  userChange: function(){
    this.setState({
      user: UserStore.find(
        parseInt(this.props.params.userId)
      )
    })
  },

  render: function(){
    debugger
    var theUser = this.state.user;
    if (!this.state.user) {
      return <div>Loading...</div>;
    } else {
      return(
        <div className="profile-container">
          <Header />
          <ProfileInfos user={theUser} />
          <ProfileTab user={theUser} />
        </div>
      );
    }
  }
})

module.exports = ProfilePage;
