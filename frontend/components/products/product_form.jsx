var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');


var blankAttributes = ({
    product: {
      name: '',
      description: '',
      link: '',
      author_id: ''
    }
});


var ProductForm = React.createClass({

  mixins: [LinkedStateMixin, ReactRouter.History],

  getInitialState: function(){
    return blankAttributes;
  },

  handleSubmit: function(e){
    e.preventDefault();
    var product = Object.assign({}, this.state);
    ApiUtil.createProduct(product);
    this.navigateToIndex();
  },

  navigateToIndex: function(){
    this.history.push("/");
  },

  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Post a new product</h2>
        <label>Product name:</label>
        <input type="text" name="product[name]" placeholder="Devise, React, Boostrapp... " valueLink={this.linkState('name')}/>
        <br/>
        <label>Product description:</label>
        <input type="textarea" name="product[description]" placeholder="1 sentence product description" valueLink={this.linkState('description')}/>
        <br/>
        <label>Product URL:</label>
        <input type="text" name="product[link]" placeholder="https://webpack.github.io/docs/" valueLink={this.linkState('link')}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
})

module.exports = ProductForm;
