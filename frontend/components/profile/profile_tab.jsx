var React = require('react');
var TabLabels = require('./tab_labels');
var ProfileProductsList = require("./profile_products_list");



var ProfileTab = React.createClass({
  render: function(){
    debugger
    return(
      <div className="profile-tabs">
          <TabLabels user={this.props.user} products={this.props}/>
      </div>
    );
  }

})

module.exports = ProfileTab;
