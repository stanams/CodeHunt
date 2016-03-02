var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util');
var Link = ReactRouter.Link;
var browserHistory = require('react-router').browserHistory;


var ProductForm = React.createClass({

  mixins: [LinkedStateMixin],
  // ReactRouter.History

  getInitialState: function(){
    return {};
  },

  handleSubmit: function(e){
    e.preventDefault();
    var product = {};
    $.extend(product, this.state);
    ApiUtil.createProduct(product, function (id) {
      browserHistory.push("/");
    }.bind(this));
  },

  render: function(){
    return(
      <div className="new-product-form-box">
        <Link to="/"><p className="leave-form-button">x</p></Link>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h2 className="form-title">Submit a new product</h2>

          <div className="form-box-container">

            <div className="form-box-item-line">
              <label className="label-form">Product name *</label>
              <input className="new-product-form-input"
                     type="text" name="product[name]"
                     placeholder="Devise, React, Boostrapp... "
                     valueLink={this.linkState('name')}/>
            </div>

              <br/>

            <div className="form-box-item-line">
              <label className="label-form">Product description * </label>
              <input className="new-product-form-input"
                     type="textarea"
                     name="product[description]"
                     placeholder="Rails authentication made simple"
                     valueLink={this.linkState('description')}/>
            </div>

            <br/>

            <div className="form-box-item-line">
              <label className="label-form">Product URL </label>
              <input className="new-product-form-input"
                     type="text" name="product[link]"
                     placeholder="https://webpack.github.io/docs/"
                     valueLink={this.linkState('link')}/>
            </div>

            <br/>
            <button id="upload_widget_opener_product"></button>
            // TODO WIDGET CLOUDINARY
          </div>
          <input className="btn btn-primary form-submit-button"
                 type="submit"
                 value="Submit"/>
        </form>
      </div>
    );
  }
})

module.exports = ProductForm;
