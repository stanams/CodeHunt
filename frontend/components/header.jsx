var React = require('react');

var Header = React.createClass({
  render: function(){
    return(
      <nav className="navbar">
        <p id="logo-page">Code Hunt</p>
        <button className="header-profile-button">Sign Out</button>
        <button className="header-new-product-button">+</button>
      </nav>
    );
  }
})

module.exports = Header;
