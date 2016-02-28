var React = require('react');
var UserStore = require('../../stores/user_store');
var ApiUtil = require('../../util/api_util');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ProfileInfos = require('./profile_info');
var UserProducts = require('./user_products');

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
    if (!this.state.user) {
      return <div>Loading...</div>;
    } else {
      return(
        <div>
          <ProfileInfos user={this.props.params.userId}>
          <UserProducts user={this.props.params.userId}>
        </div>
      );
    }
  }
})

module.exports = ProfilePage;
