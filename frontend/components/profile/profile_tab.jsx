var React = require('react');
var TabLabels = require('./tab_labels');

var ProfileTab = React.createClass({
  render: function(){
    return(
      <div className="profile-tabs">
        <div>
          <TabLabels/>
        </div>
        <div>
          LabelledProducts
        </div>
      </div>
    );
  }

})

module.exports = ProfileTab;
