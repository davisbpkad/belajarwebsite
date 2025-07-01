// fungsi untuk mengecek apakah bilangan ganjil
function filterOdd(numbers) {
    const result = [];
    // Contoh input: [1, 2, 3, 4, 5]
    // Contoh output: [1, 3, 5]
    for (let i = 0; i < numbers.length; i++) {
        const bilangan = numbers[i];
        if (isOdd(bilangan)) {
            result.push(bilangan);
        }
    }
    //kembalikan array baru tersebut
    return result;
}

// fungsi untuk mengecek apakah bilangan genap
function filterEven(numbers) {
    const result = [];          
    // Contoh input: [1, 2, 3, 4, 5]
    // Contoh output: [2, 4]
    for (let i = 0; i < numbers.length; i++) {
        const bilangan = numbers[i];
        if (isEven(bilangan)) {
            result.push(bilangan);
        }
    }
    return result;
}

function filterKelipatanTiga(numbers) {
    const result = [];
    // Contoh input: [1, 2, 3, 4, 5, 6]
    // Contoh output: [3, 6]
    for (let i = 0; i < numbers.length; i++) { 
        // looping untuk setiap bilangan
        // ambil bilangan dari array numbers
        const bilangan = numbers[i]; // ambil bilangan dari array numbers
        // cek apakah bilangan tersebut kelipatan tiga
        if (isKelipatanTiga(bilangan)) { // jika bilangan kelipatan tiga
            // jika bilangan kelipatan tiga, maka masukan ke array result
            result.push(bilangan);
        }
    }
    //kembalikan array baru tersebut
    return result;
}   


// fungsi untuk mengecek apakah bilangan ganjil
function isOdd(number) {
    //jika bilangan ganjil
    return number % 2 !== 0;
}
// fungsi untuk mengecek apakah bilangan genap
function isEven(number) {
    //jika bilangan genap
    return number % 2 === 0;
}

function isKelipatanTiga(number) {
    //jika bilangan kelipatan tiga
    return number % 3 === 0;
}

const kelipatanTiga = filterNumbers(angka, (bilangan) => bilangan % 3 === 0);

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterOdd(angka));
console.log(filterEven(angka));
console.log(filterKelipatanTiga(angka));
