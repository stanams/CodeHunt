var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Search = require('./search.jsx');
var browserHistory = require('react-router').browserHistory;


var Header = React.createClass({

  // mixins: [ReactRouter.History],

  handleClickNewProduct: function(){
    browserHistory.push("/products/new");
  },



  render: function(){
    // debugger
    return(
      <nav className="navbarr">
        <Link to="/" className="logo-page"><img className="header-logo" src="assets/header-logo"></img></Link>

        <button className="header-profile-button">Sign Out</button>
        <p className="header-new-product-button" onClick={this.handleClickNewProduct}>+</p>
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
