module.exports = {
  getExtension: function(filename) {
    var regex = /\.[0-9a-z]+$/i;
    return (filename.match(regex)[0] || '').substring(1).toLowerCase();
  }
}