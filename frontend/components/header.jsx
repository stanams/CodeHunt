var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Search = require('./search.jsx');
var browserHistory = require('react-router').browserHistory;
var attr = document.getElementById('root');
var logged_in_user = JSON.parse(attr.getAttribute('userLoggedIn'));
var ProfileMenu = require('./profile_menu');


var Header = React.createClass({

  getInitialState: function(){
    return {
      showProfileMenu: false
    }
  },

  handleClickNewProduct: function(){
    browserHistory.push("/products/new");
  },

  renderProfileMenu: function(){
    debugger
    return (
      <ul className="profile-menu-dropdown">
          <li>profile</li>
          <li>logout</li>
      </ul>
      );
  },

  handleClickProfileMenu: function(){
    if (this.state.showProfileMenu) {
      this.setState({showProfileMenu: false});
    } else {
      this.setState({showProfileMenu: true});
    }
  },

  render: function(){
    return(
      <nav className="navbarr">
        <Link to="/" className="logo-page"><img className="header-logo" src="https://res.cloudinary.com/codehunt/image/upload/v1457062978/header-logo_uus4j9.png"></img></Link>
        <div className="right-el-nav">
          <div className="header-profile-cropper profile-menu">
            <img onClick={this.handleClickProfileMenu} className="small-profile-pic" src={logged_in_user.profile_pic}/>
            {this.state.showProfileMenu ? this.renderProfileMenu() : null }
          </div>
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
