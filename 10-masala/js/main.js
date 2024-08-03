



if (number.length === 2 && !isNaN(number)) {

  let firstDigit = parseInt(number[0]); 
  let secondDigit = parseInt(number[1]); 

  let sum = firstDigit + secondDigit;

  
  if (sum > secondDigit) {
      console.log("Yig'indi o'nliklar xonasidan " + (sum - secondDigit) + " ga katta.");
  } else if (sum < secondDigit) {
      console.log("Yig'indi o'nliklar xonasidan " + (secondDigit - sum) + " ga kichik.");
  } else {
      console.log("Yig'indi va o'nliklar xonasi teng.");
  }
} else {
  console.log("Iltimos, to'g'ri 2 xonali son kiriting.");
} console.log(result)