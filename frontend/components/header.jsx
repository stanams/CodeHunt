var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Search = require('./search.jsx');
var browserHistory = require('react-router').browserHistory;
var attr = document.getElementById('root');
var logged_in_user = JSON.parse(attr.getAttribute('userLoggedIn'));



var Header = React.createClass({

  // mixins: [ReactRouter.History],

  // getInitialState: function(){
  //   return {
  //     user: UserStore
  //   }
  // },

  handleClickNewProduct: function(){
    browserHistory.push("/products/new");
  },

  // getUserLoggedIn: function(){
  //   ApiUtil.
  // },



  render: function(){
    return(
      <nav className="navbarr">
        <Link to="/" className="logo-page"><img className="header-logo" src="https://res.cloudinary.com/codehunt/image/upload/v1457062978/header-logo_uus4j9.png"></img></Link>
        <div className="right-el-nav">
          <div className="header-profile-cropper profile-menu"><img className="small-profile-pic" src={logged_in_user.profile_pic}/></div>
          <p className="header-new-product-button" onClick={this.handleClickNewProduct}><i className="fa fa-plus"></i></p>
        </div>
    </nav>
    );
  }
})

module.exports = Header;

// <Search/>

// Profile page
// makeUrl: function(){
//   var path = "/profile/" + this.props.profileId;
//   return path;
// },

// Profile Page
// <Link to={this.makeUrl()}><p className="header-profile" >Profile</p></Link>
