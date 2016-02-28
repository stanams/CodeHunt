var React = require('react');

var ProfileInfos = React.createClass({



  render: function(){
    debugger
    return(
      <div>
        {this.props.user.username}
      </div>
    );
  }
})

module.exports = ProfileInfos;
