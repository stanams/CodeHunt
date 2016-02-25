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
    return(
      <nav className="navbar">
        <Link to="/"><p id="logo-page">Code Hunt</p></Link>
        <button className="header-profile-button">Sign Out</button>
        <p className="header-new-product-button" onClick={this.handleClickNewProduct}>+</p>
      </nav>
    );
  }
})

module.exports = Header;
