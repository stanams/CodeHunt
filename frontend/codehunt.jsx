var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var IndexView = require('./components/index_view');
var ProductForm = require('./components/products/product_form');
var ProductPage = require('./components/products/product_page');
var browserHistory = require('react-router').browserHistory;

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView}/>
    <Route path="products/new" component={ProductForm}/>
    <Route path="products/:productId" component={ProductPage}/>
  </Route>
);
// <Route path="profile/:userId" component={ProfilePage}/>


document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById('root')) {
    ReactDOM.render(
      <Router history={browserHistory}>{routes}</Router>,
      document.getElementById('root'));
  }
});
