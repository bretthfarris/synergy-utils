module.exports = {
  getFilename: function(url) {
    if(url.split('/').length < 3)
      return null;
    return url.split('#').shift().split('?').shift().split('/').pop();
  },
  getSubdomain: function(url) {
    var regex = /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/i
    return url.match(regex)[1];
  }
}