var React = require('react');

var ProfileTab = React.createClass({
  render: function(){
    return(
      <div className="profile-tabs">
        <div>
          products voted
        </div>
        <div>
          products posted
        </div>
      </div>
    );
  }

})

module.exports = ProfileTab;
