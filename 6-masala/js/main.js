

function printNumbers(a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}


printNumbers(3, 7);