
let godini = 5;
let vnoska = 500;
let sum;
let meseci;
let pechalba;
let krainaSuma = 0;


for (let i = 1; i <= godini;i++) {
    meseci = 12;
    sum = meseci * vnoska;
    pechalba = (krainaSuma + sum) * 0.08;
    krainaSuma = (krainaSuma + sum) + pechalba;
}
sum *= godini;
console.log(sum.toFixed(2));
console.log(krainaSuma.toFixed(2));