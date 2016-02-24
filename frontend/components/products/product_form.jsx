var React = require('react');


var blankAttributes = ({
    product: {
      name: '',
      description: '',
      link: '',
      author_id: ''
    }
});


var ProductForm = react.createClass({

  getInitialState: function(){
    return blankAttributes;
  },

  saveProduct: function(){
    var params =
  },

  render: function(){
    return(
      <form>
        <h2>Post a new product</h2>
        <input type="text" name="product[name]" placeholder="Devise, React, Boostrapp... ">
        <input type="textarea" name="product[description]" placeholder="1 sentence product description">
        <input type="text" name="product[link]" placeholder="https://webpack.github.io/docs/">
        <input type="submit" value="Submit">
      </form>
    );
  }
})

module.exports = ProductForm;
