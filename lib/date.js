module.exports = {
  format: function(date, format) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    date = new Date(date);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    
    switch(format) {
      case 'Month D, Yr':
      default:
        return monthNames[monthIndex] + ' ' + day + ', ' + year;
    }
  }
}