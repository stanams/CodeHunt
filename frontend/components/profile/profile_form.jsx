var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../../stores/user_store');
var browserHistory = require('react-router').browserHistory;
var ApiUtil = require('../../util/api_util');

var ProfileForm = React.createClass({

  mixins: [LinkedStateMixin],

  loadIt: function(theUser){
    if (theUser === undefined) {
      return {
        username: " ",
        bio: " "
      }
    } else {
      return {
        username: theUser.username,
        bio: theUser.bio
      }
    }
  },

  getInitialState: function(){

    var userId = parseInt(this.props.params.userId);
    var theUser = UserStore.find(userId);
    return this.loadIt(theUser);
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
    var userId = parseInt(this.props.params.userId);
    var theUser = UserStore.find(userId);
    this.setState({
      username: theUser.username,
      bio: theUser.bio
    })
  },

  makeProfileUrl: function(){
    var path = "/users/" + parseInt(this.props.params.userId);
    return path;
  },

  updateUser: function(e){
    // debugger
    e.preventDefault();
    var newUser = {
     username: this.state.username,
     bio: this.state.bio
    };

    ApiUtil.updateUser(parseInt(this.props.params.userId), newUser, function (id) {
      browserHistory.push("/users/" + id);
    }.bind(this));

  },


  displayUser: function () {
    var theUser = UserStore.find(parseInt(this.props.params.userId));
    if (theUser === undefined) {
      return {
        username: "",
        bio: ""
      }
    } else {

      return theUser;
    }
  },

  handleUsernameChange: function(e){
    e.preventDefault();
    this.setState({
      username: e.target.value
    })
  },

  handleBioChange: function(e){
    e.preventDefault();
    this.setState({
      bio: e.target.value
    })
  },

  render: function(){

    var path = "/users/" + this.props.params.id;
    return(
      <div>
        <form onSubmit={this.updateUser} className="edit-profile-form" action={path} method="post">
          <input onChange={this.handleUsernameChange} type="text" name="user[username]" id="Username" placeholder="Username"  value={this.state.username}/>
          <br/>
          <br/>
          <input type="text"
                 name="user[bio]"
                 id="Bio"
                 placeholder="Student @ Appacademy"
                 value={this.state.bio}
                onChange={this.handleBioChange}/>
          <br/>
          <br/>
          <input className="btn btn-primary" type="submit" value="Update"/>
        </form>
      </div>
    );
  }
});

module.exports = ProfileForm;
