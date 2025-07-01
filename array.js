const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (const number of numbers) {
//     console.log(number);
// }

// function printNumbers(number, index, arr) {
//     console.log("index = ", index, "Value =", number, arr);
// }

numbers.forEach((number, index) => {
    console.log("index = ", index, "Value =", number);
});

const huruf = ['a', 'b', 'c', 'd', 'e'];

huruf.forEach((letter, index) => {
    console.log("Huruf ke-", index + 1, "adalah", letter);
});


// // Filter bilangan genap
// // 1. buat fungsi untuk mengecek apakah bilangan genap
// function isGenap(number) {
//     return number % 2 === 0;
// }   
// const genap = numbers.filter(isGenap);


// // Filter bilangan ganjil
const ganjil = numbers.filter((bilangan) => bilangan % 2 === 1);
console.log("Bilangan Ganjil:", ganjil);

const genap = numbers.filter((bilangan) => bilangan % 2 === 0);
console.log("Bilangan Genap:", genap);

//findindex
const n = [10, 20, 30, 40, 50];
const indexGanjilPertama = n.findIndex((bilangan) => bilangan % 2 === 1);
console.log("Index bilangan ganjil pertama:", indexGanjilPertama);



// Map untuk membuat sapaan berdasarkan gender

const users = [
    { name: 'Alice', gender: "female" },
    { name: 'Arief', gender: "male" },
    { name: 'Andi', gender: "male" },
    { name: 'David', gender: "male" },
];

// ["Pak Alice", "Pak Arief", "Pak Andi", "Pak David"]

//fungsi map 
const sapaan = users.map((user) => {
    // let panggilan;
    // if (user.gender === "Male") {
    //     panggilan = "Pak";
    // } else {
    //     panggilan = "Bu";
    // }

    const panggilan = user.gender === "male" ? "Pak" : "Bu"; // Ternary operator untuk menentukan sapaan
    //return panggilan + " " + user.name;
    return `${panggilan} ${user.name}`; // Template literal untuk menggabungkan sapaan dan nama

});

console.log("sapaan : ", sapaan);
