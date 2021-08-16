/**
* The following is the function where the solution shall be written
*/
function solution (input) {
  // logic here

  convertToInt = input.replace(/[^\d]/g, '');

  if(parseInt(convertToInt)) {

  let combinations = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {

        if (i != j && j != k && k != i) {
          combinations.push(convertToInt[i] + "" + convertToInt[j] + "" + convertToInt[k]);
        }
      }
    }
  }

  combinations.sort(function (x, y) {
    return y - x;
  });

  let output = combinations.toString();

  return "Output : " + output;
  }

  else {
    return "Error Exception: Integers not supplied"
   }
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('XYZ')); //expected output error exception: Integers not supplied
