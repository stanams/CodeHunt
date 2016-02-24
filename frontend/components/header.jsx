var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Header = React.createClass({

  mixins: [LinkedStateMixin],

  handleClickNewProduct: function(){
    this.props.history.pushState(null, "/products/new");
  },

  render: function(){
    return(
      <nav className="navbar">
        <p id="logo-page">Code Hunt</p>
        <button onClick={this.handleClickNewProduct} className="header-profile-button">Sign Out</button>
        <button className="header-new-product-button">+</button>
      </nav>
    );
  }
})

module.exports = Header;
