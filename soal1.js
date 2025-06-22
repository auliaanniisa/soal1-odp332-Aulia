// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        resultOne += numbers[i]
    }
}
console.log(resultOne)


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0
for (let i2 = 0; i2 < numbersTwo.length; i2++){
    if (numbersTwo[i2] % 2 !== 0){
        resultTwo += numbersTwo[i2]
    }
}
console.log(resultTwo)

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []

for (let i3 = 0; i3 < students.length; i3++){
    let name = students[i3]

    if (name === name.toUpperCase()){
        resultThree.push(name)
    } else if (name !== name.toUpperCase()){
        resultThree.push(name.toUpperCase())
    }
}
console.log(resultThree)

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
     { name: 'Andi', age: 17 },
     { name: 'Tito Alexsta', age: 20 },
     { name: 'Bostang', age: 22 },
     { name: 'Cici', age: 17 }
 ];

//1. Nama-nama orang dengan usia > 18
let peopleOver18 = []
for (let i4 = 0; i4 < people.length; i4++){
    if (people[i4].age > 18) {
        peopleOver18.push(people[i4].name)
    }
}
console.log("Nama-nama orang berusia > 18 tahun:", peopleOver18)

//2. Nama-nama orang dengan panjang nama > 5
let nameLongerThan5 = []
for (let i5 = 0; i5 < people.length; i5++){
    if (people[i5].name.length > 5){
        nameLongerThan5.push(people[i5].name)
    }
}
console.log("Orang-orang dengan panjang nama > 5: ", nameLongerThan5)

// Hitung total harga semua barang
const items = [
     { name: 'Book', price: 10000 },
     { name: 'Pen', price: 5000 },
     { name: 'Pencil', price: 3000 },
 ];

 let totalPrice = 0
 for (let i6 = 0; i6 < items.length; i6++) {
    totalPrice += items[i6].price
 }

 console.log("Total harga semua barang:", totalPrice)

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = []
for (let i7 = 0; i7 < numbersThree.length; i7++){
    if(!uniqueNumbers.includes(numbersThree[i7])){
        uniqueNumbers.push(numbersThree[i7])
    }
}

console.log("Angka-angka unik:", uniqueNumbers)

// Ambil nama produk dengan harga tertinggi
const products = [
     { name: 'Laptop', price: 15000000 },
     { name: 'Phone', price: 8000000 },
     { name: 'Monitor', price: 3000000 },
 ];

 let maxPrice = 0
 let mostExpensiveProduct = ""

 for (let i8 = 0; i8 < products.length; i8++){
    if (products[i8].price > maxPrice) {
        maxPrice = products[i8].price
        mostExpensiveProduct = products[i8].name
    }
 }

 console.log("Produk dengan harga tertinggi:", mostExpensiveProduct)

// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
const sentence = words.join(" ")
console.log("Kalimat lengkap:", sentence)

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];

let resultNames = []
for (let i9 = 0; i9 < names.length; i9++){
    if (names[i9].toLowerCase().includes("a")){
        resultNames.push(names[i9])
    }
    if (resultNames.length === 3) {
        break;
    }
}

console.log("3 nama pertama yang mengandung huruf 'a':", resultNames)

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter

let totalCharacters = 0
for (let i10 = 0; i10 < namesTwo.length; i10++) {
    totalCharacters += namesTwo[i10].length
}

console.log("Total karakter:", totalCharacters)

// // Output: ['Tono (22)', 'Tara (25)']
// // Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
// const peopleTwo = [
//     { name: 'Tono', age: 22 },
//     { name: 'Tini', age: 19 },
//     { name: 'Tara', age: 25 },
// ];

