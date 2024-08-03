

let input = prompt("Iltimos, 2 xonali son kiriting:");


let number = parseInt(input);


if (number >= 10 && number <= 99) {

    let onliklar = Math.floor(number / 10); 
    let birliklar = number % 10;            
    

    let yigindi = onliklar + birliklar;

 
} else {
    console.log("Iltimos, faqat ikki xonali son kiriting.");
}