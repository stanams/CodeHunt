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
      <div>

      </div>
    );
  }
})

module.exports = ProductForm;
