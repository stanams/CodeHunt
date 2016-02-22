var React = require('react');

var Header = React.createClass({
  render: function(){
    return(
      <div>
        <p>Code Hunt</p>
        <Auth />
      </div>
    );
  }
});

module.exports = Header;
