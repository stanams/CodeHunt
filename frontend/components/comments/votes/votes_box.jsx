var React = require('react');

var VotesBox = React.createClass({

  render: function(){
    return(
      <div>
          <h3 className="vote-title">{this.props.productData.votes_count} VOTES</h3>
      </div>
    );
  }

})

module.exports = VotesBox;
