module.exports = {
  cloudinary.openUploadWidget({
    cloud_name: 'codehunt',
    upload_preset: 'waltxk4m'
  },
  function(error, result){
    if (error) {
      return null;
    } else {

    }
  });
}


document.getElementById("upload_widget_opener").addEventListener("click", function() {
    cloudinary.openUploadWidget({ cloud_name: 'codehunt', upload_preset: 'waltxk4m'},
      function(error, result) { console.log(error, result) });

  }, false);
