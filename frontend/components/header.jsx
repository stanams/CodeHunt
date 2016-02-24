var React = require('react');

var Header = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-default">
        <p>Code Hunt</p>
        <button>Add a new product</button>
        <button>Sign Out</button>
      </nav>
    );
  }
})

module.exports = Header;
