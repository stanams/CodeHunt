var React = require('react');
var TabLabels = require('./tab_labels');
var ProfileProductsList = require("./profile_products_list");

var ProfileTab = React.createClass({
  render: function(){
    return(
      <div className="profile-tabs">
        <div>
          <TabLabels />
        </div>
        <div>
          <ProfileProductsList />
        </div>
      </div>
    );
  }

})

module.exports = ProfileTab;
