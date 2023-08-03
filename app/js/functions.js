function calculateBill(billAmount, taxRate){
    console.log("Running Calculate Bill!...");
    const total = billAmount*(1 + taxRate);
    return total;
}

const myTotal = calculateBill(100,0.15);
const myTotal1 = calculateBill(100,0.10);
console.log(myTotal,myTotal1);