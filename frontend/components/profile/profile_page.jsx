var React = require('react');

var ProductStore = require('../../stores/product_store');
var ApiUtil = require('../../util/api_util');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ProfilePage = React.createClass({
  render: function(){
    return(
      <div>
        <div>
          {this.props.}
        </div>
        <ProductList author={this.props.params.userId}
      </div>
    );
  }
})

// module.exports = ProfilePage;
