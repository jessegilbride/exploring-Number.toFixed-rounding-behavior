function printFixedToOneOutputs(n) {
  let inputs = [];
  for(i=0;i<n;i++) {
      inputs.push(i+0.55)
  }

  let priorDifference;
  let sameTally = 0;
  let differentTally = 0;
  let totalTally = 0;

  inputs.forEach(input => {
    let before = input
    let after = input.toFixed(1)
    let difference = after - before
    
    if(difference === priorDifference){
      // console.log('same')
      sameTally++
      if(differentTally !== 0) {
        console.log(`differentTally: ${differentTally}`)
        totalTally += differentTally
      }
      differentTally = 0
    } else {
      // console.log('different')
      differentTally++
      if(sameTally !== 0) {
        console.log(`sameTally: ${sameTally}`)
        totalTally += sameTally
      }
      sameTally = 0
    }
    
    // console.log(`${before}\t-->\t${after} \n`)
    console.log(difference)
    
    priorDifference = difference

    // if(differentTally !== 0) console.log(`differentTally: ${differentTally}`)
    // if(sameTally !== 0) console.log(`sameTally: ${sameTally}`)
  })
  
  console.log(`sameTally: ${sameTally} \n`) // report the last sameTally because it'll get skipped (above)
  totalTally += sameTally

  console.log(`totalTally: ${totalTally} \n`) // this should equal the input number "n"
}

printFixedToOneOutputs(250)
