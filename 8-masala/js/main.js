
let a = parseInt(prompt(" A sonini kiriting:"));


if (!isNaN(a) && a > 0) {

    
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Iltimos, musbat butun son kiriting.");
}