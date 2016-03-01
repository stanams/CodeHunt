var React = require('react');

var VotesBox = React.createClass({

  render: function(){
    debugger
    return(
      <div >
          <h3 >{this.props.productData.votes_count} Votes</h3>
      </div>
    );
  }
})

module.exports = VotesBox;

// className="votes-container"
// className="votes-title"
