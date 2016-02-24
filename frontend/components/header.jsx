var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var Search = require('./search.jsx');

var Header = React.createClass({

  mixins: [ReactRouter.History],

  handleClickNewProduct: function(){
    debugger
    this.history.push("/products/new");
  },

  render: function(){
    return(
      <nav className="navbar">
        <p id="logo-page">Code Hunt</p>
        <button className="header-profile-button">Sign Out</button>
        <p className="header-new-product-button" onClick={this.handleClickNewProduct}>+</p>
      </nav>
    );
  }
})

module.exports = Header;
