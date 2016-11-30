var resistor = require('./index.js')

var valNeeded = 500
var resTableAvailable = [100, 150, 1000, 1500, 10000]

resistor.cal0(valNeeded, resTableAvailable)
resistor.cal1(valNeeded, resTableAvailable)
resistor.cal2(valNeeded, resTableAvailable)
