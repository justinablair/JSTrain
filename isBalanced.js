// We want a function isBalanced that accepts a string of parathesis 
// We want to iterate through the string a character at a time
// if letter is opening push on stack 
// if letter is closing peek at stack to see if theres an opening
//  if theres a balanced it pops the open off the stack

let isBalanced = (input) => {
    //string of paired opening and closing brackets, opening=even index, closing=odd index
        let brackets = "[]{}()<>"
        //create empty array for our FILO stack
        let stack = []
      //loop iterates through input elements saves it to var bracket
        for(let bracket of input) {
                // bracketsIndex looks up index of current bracket in previously saved brackets 
                // if even opening, if odd closed
          let bracketsIndex = brackets.indexOf(bracket)
           // check this record to make sure the brackets are all balanced
          if (bracketsIndex === -1){
            continue //closing bracket look for opening bracket
          }
          //even opening num/2 gives zero remainder
          if(bracketsIndex % 2 === 0) {
            // // push the closing bracket onto the stack
            //by finding bracket with index bracketIndex +1
            //our bracket string= opening followed by closing so can increment
            //BracketsIndiex of any opening to find address of its closing
            stack.push(bracketsIndex + 1)
          } else {
            if(stack.pop() !== bracketsIndex) {
              return false;
            }
          }
        }
        return stack.length === 0
      }
      console.log('true:')
      console.log(isBalanced("[]"))
      console.log(isBalanced("{}"))
      console.log(isBalanced("()"))
      console.log(isBalanced("[ { } ]")) //true
      console.log(isBalanced("[this is fine]"))
      
      
      console.log('false:')
      console.log(isBalanced('[ { ] }'))
      console.log(isBalanced("] ["))
      console.log(isBalanced("[ ( ]"))
    
      module.exports = isBalanced;