var React = require('react');

var Search = React.createClass({
  render: function(){
    return(
      <div id="wrap">
        <form action="" autocomplete="on">
        <input className="search-bar" id="search" name="search" type="text" placeholder="What're we looking for ?"/>
        <input className="search-bar" id="search_submit" value="Rechercher" type="submit"/>
        </form>
      </div>
    );
  }
})

module.exports = Search;
