let arr = [1, 55, 63, 12, 3, 53, 31, 42, 61, 53];


if (arr[0] % 2 !== 0) { 

    let evenNumbers = arr.filter(num => num % 2 === 0);
    
    console.log(evenNumbers);
}