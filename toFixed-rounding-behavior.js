function printFixedToOneOutputs(n = 2, decimalPrecision = 1, decimalToRound = 0.55) {
  let inputs = [];

  if(!Number.isInteger(n) || n < 1) return '\n--> quantity of numbers (1st arg) to compare must be a positive integer.'
  if(!Number.isInteger(decimalPrecision) || decimalPrecision < 1) return '\n--> decimal precision (2nd arg) must be a positive integer.\n'
  if(decimalToRound < 0 || decimalToRound > 1) return '\n--> decimal for rounding (3rd arg) is out of bounds.\n'
  
  for(i=0;i<n;i++) {
    inputs.push(i + decimalToRound)
  }

  let truncMultiplier = Math.pow(10, decimalPrecision);
  let priorDifference;
  let sameTally = 0;
  let differentTally = 0;
  let totalTally = 0;

  inputs.forEach(input => {
    let after_toFixed = input.toFixed(decimalPrecision)
    let after_trunc = Math.trunc(input * truncMultiplier)/truncMultiplier
    // let difference = after_toFixed - input
    let difference = after_trunc - input
    
    if (difference === priorDifference){
      // console.log('same')
      sameTally++
      if (differentTally !== 0) {
        // console.log(`differentTally: ${differentTally}`)
        totalTally += differentTally
      }
      differentTally = 0
    } else if (difference !== priorDifference) {
      // console.log('different')
      differentTally++
      if(sameTally !== 0) {
        // console.log(`sameTally: ${sameTally}`)
        totalTally += sameTally
      }
      sameTally = 0
    }
    
    console.log(`* input:         ${input}`)
    console.log(`* after_toFixed: ${after_toFixed}`)
    console.log(`* after_trunc:   ${after_trunc}`)
    console.log(difference, `(actual difference)`)
    
    priorDifference = difference

    if(differentTally !== 0) console.log(`  ...diff tally: ${differentTally} \n`)
    if(sameTally !== 0) console.log(`  ...same tally: ${sameTally} \n`)
  })
  
  totalTally += sameTally
  console.log(`\ntotalTally: ${totalTally}`) // this should equal the input number "n"
  return ''
}

console.log(printFixedToOneOutputs(10, 3, 0.5555))
// console.log(printFixedToOneOutputs()) // utilize the defaults
