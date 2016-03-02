var React = require('react');

var VotesBox = React.createClass({

  render: function(){
    debugger
    return(
      <div className="votes-count-container-product-page">
          <h3 className="votes-title">{this.props.productData.votes_count} VOTES</h3>
      </div>
    );
  }
})

module.exports = VotesBox;

// className="votes-container"
// className="votes-title"
