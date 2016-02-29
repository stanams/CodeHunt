var React = require('react');

var VotesBox = React.createClass({

  render: function(){
    return(
      <div className="votes-container">
          <h3 className="votes-title">{this.props.productData.votes_count} VOTES</h3>
      </div>
    );
  }

})

module.exports = VotesBox;
