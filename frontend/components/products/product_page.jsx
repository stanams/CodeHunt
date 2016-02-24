var React = require('react');

var ProductPage = React.createClass({
  render: function(){
    return(
      <div>
        <section>
          {this.props.product.name}
          {this.props.product.description}
        </section>
        <section>
          votes
        </section>
        <section>
          Comments
        </section>
      </div>
    );
  }
})

module.exports = ProductPage;
