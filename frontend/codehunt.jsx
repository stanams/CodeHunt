var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/app');

// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var IndexRoute = require('react-router').IndexRoute;



document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById('root')) {
    ReactDOM.render(
      <App />,
      document.getElementById('root'));
  }
});
