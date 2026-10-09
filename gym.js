let monthlyPrice = 350;
let months = +prompt(`Enter number of months:`);
let personalTraining = confirm(`Add personal training?`);
let total = monthlyPrice * months;

if (months >= 12) {
    total = total - ((total * 15)/100);
} else if (months >= 6) {
    total = total - ((total * 10)/100);
}

total = total + ((total * 14)/100);

if (personalTraining === true) {
    total = total + 200;
}

console.log(`Final membership cost: ${total.toFixed(2)}`);