var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var IndexView = require('./index_view');
var ProductForm = require('./components/products/product_form');
var ProductPage = require('./components/products/product_page');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute path="/" component={IndexView}>
    <Route path="products/new" component={ProductForm}/>
    <Route path="products/:productId" component={ProductPage}>
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById('root')) {
    ReactDOM.render(
      <Router>{routes}</Router>,
      document.getElementById('root'));
  }
});
