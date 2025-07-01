// const { Children } = require("react");

// Deklarasi variabel
let nama = "Davis";       // Tipe: string
let umur = 28;            // Tipe: number
let sudahMenikah = true; // Tipe: boolean

// Menampilkan nilai dan tipe data
console.log("Nama:", nama, "| Tipe:", typeof nama);
console.log("Umur:", umur, "| Tipe:", typeof umur);
console.log("Sudah Menikah:", sudahMenikah, "| Tipe:", typeof sudahMenikah);

// Operasi Aritmatika Dasar
// 1. Deklarasi dua variabel bertipe number
let angka1 = 10;
let angka2 = 5;

// 2. Operasi aritmatika
let hasilPenjumlahan = angka1 + angka2;
let hasilPengurangan = angka1 - angka2;
let hasilPerkalian = angka1 * angka2;
let hasilPembagian = angka1 / angka2;

// 3. Tampilkan hasilnya
console.log("Penjumlahan:", hasilPenjumlahan);   // 15
console.log("Pengurangan:", hasilPengurangan);   // 5
console.log("Perkalian:", hasilPerkalian);       // 50
console.log("Pembagian:", hasilPembagian);       // 2

// Operasi Aritmatika Lanjutan
// 1. Deklarasi variabel
let x = 10;
console.log("Nilai awal x:", x);

// 2. Penambahan
x += 5; // x = x + 5
console.log("Setelah ditambah 5:", x);

// 3. Pengurangan
x -= 3; // x = x - 3
console.log("Setelah dikurang 3:", x);

// 4. Perkalian
x *= 2; // x = x * 2
console.log("Setelah dikali 2:", x);

// 5. Pembagian
x /= 4; // x = x / 4
console.log("Setelah dibagi 4:", x);

// Operasi Aritmatika Lanjutan dengan Modulus dan Increment
// 1. Deklarasi variabel
let a = 10;
let b = 3;

// 2. Operator modulus
let sisaBagi = a % b;
console.log("Sisa pembagian a % b =", sisaBagi); // 10 % 3 = 1

// 3. Operator increment
a++; // menambah nilai a sebesar 1

// 4. Tampilkan hasil setelah increment
console.log("Nilai a setelah di-increment:", a); // 11

// Operasi Logika
// 1. Deklarasi variabel boolean
let isAdult = true;
let hasLicense = false;
 
// 2. Operasi AND (&&) dan OR (||)
let hasilAND = isAdult && hasLicense;
let hasilOR = isAdult || hasLicense;

// 3. Tampilkan hasil di console
console.log("Hasil AND (isAdult && hasLicense):", hasilAND); // false
console.log("Hasil OR  (isAdult || hasLicense):", hasilOR);  // true 

//passed by reference
const numbers1 = [1, 2, 3];
const numbers2 = numbers1; // numbers2 mereferensikan array yang sama dengan numbers1
console.log("Numbers1:", numbers1);
console.log("Numbers2:", numbers2);
numbers2[0] = 10; // Mengubah elemen pertama dari numbers2
console.log("Numbers1:", numbers1);
console.log("Numbers2:", numbers2);


//methods pada array
const fruits = ["apple", "banana", "cherry"];
// Menambahkan elemen ke akhir array
fruits.push("orange");
console.log("Fruits setelah ditambahkan:", fruits);     
// Menghapus elemen terakhir dari array
fruits.pop();   
console.log("Fruits setelah di-pop:", fruits);
// Menambahkan elemen ke awal array
fruits.unshift("kiwi");
console.log("Fruits setelah di-unshift:", fruits);          
// Menghapus elemen pertama dari array
fruits.shift();
console.log("Fruits setelah di-shift:", fruits);

// Menggabungkan dua array
const vegetables = ["carrot", "broccoli"];
const combined = fruits.concat(vegetables);
console.log("Combined array:", combined);
// Mengambil sebagian array (slice)
const slicedFruits = fruits.slice(1, 3); // Mengambil elemen dari indeks 1 hingga 2
console.log("Sliced fruits:", slicedFruits); // ["banana", "cherry"]
// Membalik urutan array
const reversedFruits = fruits.reverse();
console.log("Reversed fruits:", reversedFruits); // ["cherry", "banana", "kiwi"]
// Mengurutkan array
const sortedFruits = fruits.sort();
console.log("Sorted fruits:", sortedFruits); // ["banana", "cherry", "kiwi"]
// Mencari elemen dalam array
const indexOfBanana = fruits.indexOf("banana");
console.log("Index of banana:", indexOfBanana); // 0

//splice pada array
const numbers = [1, 2, 3, 4, 5];
// Menambahkan elemen baru pada indeks 2
numbers.splice(2, 0, 6, 100, 200); // Menambahkan 6 pada indeks 2
console.log("Numbers setelah splice (tambah 6):", numbers); // [1, 2, 6, 3, 4, 5]

//sort numbers
const unsortedNumbers = [50, 3, 8, 10, 2];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log("Unsorted Numbers:", unsortedNumbers); // [5, 3, 8, 1, 2]
console.log("Sorted Numbers:", sortedNumbers); // [1, 2, 3, 5, 8]


//join pada array
const colors = ["red", "green", "blue"];
// Menggabungkan elemen array menjadi string dengan pemisah koma
const joinedColors = colors.join("; ");
console.log("Joined Colors:", joinedColors); // "red, green, blue"
//split pada string
const sentence = "Hello, world! Welcome to JavaScript.";
const words = sentence.split(" ");
console.log("Words:", words); // ["Hello,", "world!", "Welcome", "to", "JavaScript."]

//create array of strings
//modify array of strings=> add, remove, update, delete, sort, print length
const stringArray = ["apple", "banana", "cherry"];  
// Menambahkan elemen baru
stringArray.push("orange"); // Menambahkan "orange" ke akhir array
console.log("Setelah menambahkan 'orange':", stringArray); // ["apple", "banana", "cherry", "orange"]
// Menghapus elemen terakhir
stringArray.pop(); // Menghapus elemen terakhir
console.log("Setelah menghapus elemen terakhir:", stringArray); // ["apple", "banana", "cherry"]
// Mengupdate elemen pada indeks 1
stringArray[1] = "kiwi"; // Mengubah "banana" menjadi "kiwi"
console.log("Setelah mengupdate indeks 1:", stringArray); // ["apple", "kiwi", "cherry"]
// Menghapus elemen pada indeks 0
stringArray.splice(0, 1); // Menghapus elemen pada indeks 0
console.log("Setelah menghapus elemen pada indeks 0:", stringArray); // ["kiwi", "cherry"]  
// Mengurutkan array
stringArray.sort(); // Mengurutkan array secara alfabetis
console.log("Setelah mengurutkan:", stringArray); // ["cherry", "kiwi"]
// Mencetak panjang array
console.log("Panjang array:", stringArray.length); // 2 


const person1Obj = {
  name: "Davis",
  age: 32,
  city: "Bandung",
  child: ["Desya", "Deris"],
  address: {
    street: "Jl. Merdeka",
    building: "Gedung Sate",
    Province: "Jawa Barat"
  }
};

console.log(person1Obj.name); // Output: Davis
const key ="age";
console.log(person1Obj.child); // Output: ["Desya", "Deris"] 
console.log(person1Obj[key]); // Output: 32
//update age
person1Obj.age = 33;
console.log(person1Obj.age); // Output: 33
// Menambahkan properti baru
person1Obj.country = "Indonesia";
console.log(person1Obj.country); // Output: Indonesia
// Menghapus properti country
delete person1Obj.country;
console.log(person1Obj.country); // Output: undefined
console.log(person1Obj); // Output: { name: 'Davis', age: 33, city: 'Bandung', child: [ 'Desya', 'Deris' ] }

// Membuat tabel dari objek
// array of objects
const users = [
    { name: "Davis", age: 32, city: "Malang", address: { street: "Jl. Merdeka", building: "Gedung Sate", Province: "Jawa Barat" } },
    { name: "Arief", age: 38, city: "Jakarta", address: { street: "Jl. Kebon Jeruk", building: "Gedung B", Province: "DKI Jakarta" } },
    { name: "Andi", age: 40, city: "Surabaya", address: { street: "Jl. Diponegoro", building: "Gedung C", Province: "Jawa Timur" } },
    { name: "Desya", age: 5, city: "Bandung", address: { street: "Jl. Merdeka", building: "Gedung D", Province: "Jawa Barat" } },
    { name: "Deris", age: 3, city: "Bandung", address: { street: "Jl. Merdeka", building: "Gedung D", Province: "Jawa Barat" } }
];

// Ubah address menjadi string agar tampil rapi di tabel
const usersWithAddressString = users.map(user => ({
    ...user,
    address: `${user.address.street}, ${user.address.building}, ${user.address.Province}`
}));

console.table(users); // Menampilkan tabel di console
console.table(usersWithAddressString); // Menampilkan tabel di console dengan address sebagai string

//condional statement
// 1. Deklarasi variabel
let lapar = true;
let jamIstirahat = false;
// 2. Logika if-else
if (lapar === true && jamIstirahat === true) {
    console.log("Saya akan makan siang.");
    } else {
        console.log("Saya tidak akan makan siang.");    
    }
// 3. Logika if-else if-else
let nilai = 85; // Ganti dengan nilai yang ingin diuji
if (nilai >= 80 && nilai <= 100) {
    console.log("Nilai Anda A");
} else if (nilai >= 60 && nilai < 80) {
    console.log("Nilai Anda B");
} else {
    console.log("Nilai Anda C");
}

// 4. Logika switch-case
let hari = "Senin"; // Ganti dengan hari yang ingin diuji
switch (hari) {
    case "Senin":
        console.log("Hari ini adalah Senin.");
        break;
    case "Selasa":
        console.log("Hari ini adalah Selasa.");
        break;
    case "Rabu":
        console.log("Hari ini adalah Rabu.");
        break;
    case "Kamis":
        console.log("Hari ini adalah Kamis.");
        break;
    case "Jumat":
        console.log("Hari ini adalah Jumat.");
        break;
    case "Sabtu":
        console.log("Hari ini adalah Sabtu.");
        break;
    case "Minggu":
        console.log("Hari ini adalah Minggu.");
        break;
    default:
        console.log("Hari tidak valid.");
}


const level = "Eselon III"
let tunjangan = 0;
switch (level) {
    case "Eselon I":
        tunjangan = 10_000_000;
        break;
    case "Eselon II":
        tunjangan = 8_000_000;
        break;
    case "Eselon III":
        tunjangan = 6_000_000;
        break;
    case "Eselon IV":
        tunjangan = 4_000_000;
        break;
    default:
        tunjangan = 2_000_000; // Default untuk level lain
}
console.log("Tunjangan untuk", level, "adalah:", tunjangan);


const jabatan = "Eselon II";
let tunjab = 0;

if (level === "Eselon I") {
    tunjab = 10_000_000;
} else if (level === "Eselon II") {
    tunjab = 8_000_000;
} else if (level === "Eselon III") {
    tunjab  = 6_000_000;
} else if (level === "Eselon IV") {
    tunjab = 4_000_000;
} else {
    tunjab = 2_000_000; // Default untuk level lain
}

console.log("Tunjangan untuk", jabatan, "adalah:", tunjab);


const number = [];

if (number.length == 0) {
    number.push = (1);
}

// contoh belajar looping
// 1. Looping dengan for
console.log("---------contoh belajar looping---------");
for (let i = 0; i < 5; i++) {
    console.log("Perulangan ke:", i);
}
console.log("------------------");


// 2. Looping dengan while
let j = 0;
while (j < 5) {
    console.log("Perulangan ke:", j);
    j++;
}
console.log("------------------");

// 3. Looping dengan do-while
let k = 0;
do {
    console.log("Perulangan ke:", k);
    k++;
    
}while (k < 5);
console.log("------------------");


// looping membuat segitiga sama sisi
const n = 5; // Tinggi segitiga
for (let i = 1; i <= n; i++) {
    let row = "";
    // Tambahkan spasi
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // Tambahkan bintang
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }
    console.log(row);
}   

// looping push-up while
let capek = false
let jumlahPushUp = 0;
while (!capek) {
    jumlahPushUp++;
    console.log("Push-up ke:", jumlahPushUp);
    if (jumlahPushUp >= 10) {
        capek = true; // Berhenti setelah 10 push-up
    }
}
console.log("------------------");

// looping push-up do-while
let capek1 = false;
let jumlahPushUp1 = 0;
do {
    jumlahPushUp1++;
    console.log("Push-up ke:", jumlahPushUp1);
    if (jumlahPushUp1 >= 5) {
        capek1 = true; // Berhenti setelah 10 push-up
    }
} while (!capek1);
console.log("------------------");


//loop array of objects
const buah1 = ["Apel", "Pisang", "Jeruk", "Mangga", "Apel"];
for (let i = 0; i < buah1.length; i++) {
    console.log("Buah ke-" + (i + 1) + ": " + buah1[i]);
}
// Looping dengan forEach
buah1.forEach((item, index) => {
    console.log("Buah ke-" + (index + 1) + ": " + item);
});
// Looping dengan for...of
for (const item of buah1) {
    console.log("Buah: " + item);
}
console.log("------------------");
