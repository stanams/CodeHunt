var React = require('react'),
    ReactDOM = require('react-dom'),
    UploadButton = require("./components/UploadButton"),
    ImageEl = require("./components/ImageList");

var Images = React.createClass({
  getInitialState: function () {
    return { image: [] };
  },
  componentDidMount: function () {
    $.get("/api/images", function (images) {
      this.setState({images: images});
    }.bind(this))
  },
  postImage: function (image) {
    var data = {image: {url: image.url}};
    $.post("/api/images", data, function (savedImage) {
      var image = this.state.image;
      images.push(savedImage);
      this.setState({ image: image });
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <UploadButton postImage={this.postImage}/>
        <ImageEl image={this.state.image}/>
      </div>
    );
  }
});
document.addEventListener( 'DOMContentLoaded', function () {
  ReactDOM.render(
    <Images/>,
    document.getElementById('root')
  );
}, false );
