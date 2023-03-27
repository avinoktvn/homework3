let nilaiRandom = [];
for (let i = 1; i < 100; i++) {
  nilaiRandom.push(Math.floor(Math.random() * 50) + 1);
}

let nilaiGenap = [];
let nilaiGanjil = [];

// memisahkan nilai ke dalam array genap dan ganjil
for (let i = 0; i < nilaiRandom.length; i++) {
  if (i % 2 === 0) {
    nilaiGenap.push(nilaiRandom[i]);
  } else {
    nilaiGanjil.push(nilaiRandom[i]);
  }
}

//  nilai min, max, total, dan rata-rata pada array genap
let minGenap = Math.min(...nilaiGenap);
let maxGenap = Math.max(...nilaiGenap);
let totalGenap = nilaiGenap.reduce((a, b) => a + b, 0);
let rataRataGenap = totalGenap / nilaiGenap.length;

// nilai min, max, total, dan rata-rata pada array ganjil
let minGanjil = Math.min(...nilaiGanjil);
let maxGanjil = Math.max(...nilaiGanjil);
let totalGanjil = nilaiGanjil.reduce((a, b) => a + b, 0);
let rataRataGanjil = totalGanjil / nilaiGanjil.length;

// bandingkan nilai min, max, total, dan rata-rata pada array genap dan ganjil
let perbandinganMin = minGenap > minGanjil ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil";
let perbandinganMax = maxGenap > maxGanjil ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil";
let perbandinganTotal = totalGenap === totalGanjil ? "Total memiliki nilai sama pada kedua array" : "Total memiliki nilai berbeda pada kedua array";
let perbandinganRataRata = rataRataGenap > rataRataGanjil ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil";

// output hasil
console.log("Array 100 nilai random:" + nilaiRandom);
console.log("Array nilai genap:" + nilaiGenap);
console.log("Array nilai ganjil:" + nilaiGanjil);
console.log("Min pada array genap: " + minGenap);
console.log("Max pada array genap: " + maxGenap);
console.log("Total pada array genap: " + totalGenap);
console.log("Rata-rata pada array genap: " + rataRataGenap);
console.log("Min pada array ganjil: " + minGanjil);
console.log("Max pada array ganjil: " + maxGanjil);
console.log("Total pada array ganjil: " + totalGanjil);
console.log("Rata-rata pada array ganjil: " + rataRataGanjil);
console.log(perbandinganMin);
console.log(perbandinganMax);
console.log(perbandinganTotal);
console.log(perbandinganRataRata);
