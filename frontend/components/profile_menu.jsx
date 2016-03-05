var React = require('react');

var ProfileMenu = React.createClass({
  render: function(){
    return(
      <ul className="profile-menu-dropdown">
        <li>profile</li>
        <li>logout</li>
      </ul>
    );
  }
})

module.exports = ProfileMenu;
