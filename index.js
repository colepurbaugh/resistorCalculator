// Print Table
module.exports.printTable = function (table) {
  for (var i = 0; i < table.length; i++) {
    console.log(table[i])
  }
}

// 1 Resistor
module.exports.cal0 = function (R, table) {
  var flag = 0
  console.log('**checking single resistor**')
  for (var i = 0; i < table.length; i++) {
    if (R === table[i]) {
      console.log(table[i], 'ohm resistor found')
    }
  }

  if (!flag) {
    console.log('**no two resistors in parallel match**')
  }
  console.log()
  return
}

// 2 Resistor Parallel
module.exports.cal1 = function (R, table) {
  var flag = 0
  console.log('**checking two parallel resistors**')
  for (var i = 0; i < table.length; i++) {
    var R1 = table[i]
    for (var j = 0; j < table.length; j++) {
      var R2 = table[j]
      var rTemp = 1 / ((1 / R1) + (1 / R2))
      if (R === rTemp) {
        console.log(R1, ' in parallel with ', R2, ' makes ', R)
        flag = 1
      }
    }
  }
  if (!flag) {
    console.log('**no two resistors in parallel match**')
  }
  console.log()
  return
}

// 2 Resistor Series
module.exports.cal2 = function (R, table) {
  var flag = 0
  console.log('**checking two series resistors**')
  for (var i = 0; i < table.length; i++) {
    var R1 = table[i]
    for (var j = 0; j < table.length; j++) {
      var R2 = table[j]
      var rTemp = R1 + R2
      if (R === rTemp) {
        console.log(R1, ' in series with ', R2, ' makes ', R)
        flag = 1
      }
    }
  }
  if (!flag) {
    console.log('**no two resistors in series match**')
  }
  console.log()
  return
}

// 3 Resistor (1 Series, 2 Parallel)
module.exports.cal3 = function (R, table) {
  var flag = 0
  console.log('checking 3 Resistor (1 Series, 2 Parallel)')
  for (let i = 0; i < table.length; i++) {
    var R1 = table[i]
    for (let j = 0; j < table.length; j++) {
      var R2 = table[j]
      for (let k = 0; k < table.length; k++) {
        var R3 = table[k]
        var rTemp = R1 + (1 / ((1 / R2) + (1 / R3)))
        if (R === rTemp) {
          console.log(R1, ' in series with ', R2, ' in parallel with ', R3, 'makes ', R)
          flag = 1
        }
      }
    }
  }
  if (!flag) {
    console.log('**no combination found**')
  }
  console.log()
  return
}

// TODO: 3 Resistor (2 Series, 1 Parallel)


// TODO: 3 Resistor Series


// TODO: 3 Resistor Parallel
