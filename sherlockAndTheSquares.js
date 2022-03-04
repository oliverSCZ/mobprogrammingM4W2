/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
  // Write your code here
let a1 = parseInt(Math.sqrt(a));
let b1 = parseInt(Math.sqrt(b));
let res = b1 - a1;
  if (a1 * a1 >= a){
      res++;
  }
  return res;
}

console.log(squares(3, 9))