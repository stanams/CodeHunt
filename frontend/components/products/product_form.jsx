var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util');


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
      <div className="new-product-form-box">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h2 className="form-title">Submit a new product</h2>

          <div className="form-box-container">

            <div className="form-box-item-line">
              <label className="label-form">Product name: </label>
              <input className="new-product-form-input" type="text" name="product[name]" placeholder="Devise, React, Boostrapp... " valueLink={this.linkState('name')}/>
            </div>

              <br/>

            <div className="form-box-item-line">
              <label className="label-form">Product description: </label>
              <input className="new-product-form-input" type="textarea" name="product[description]" placeholder="Handle authentication with rails" valueLink={this.linkState('description')}/>
            </div>

            <br/>

            <div className="form-box-item-line">
              <label className="label-form">Product URL: </label>
              <input className="new-product-form-input" type="text" name="product[link]" placeholder="https://webpack.github.io/docs/" valueLink={this.linkState('link')}/>
            </div>

            <br/>


          </div>
          <input className="btn btn-primary form-submit-button" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
})

module.exports = ProductForm;
