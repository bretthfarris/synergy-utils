module.exports = {
  getSubdomain: function(url) {
    var regex = /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/i
    return url.match(regex)[1];
  }
}