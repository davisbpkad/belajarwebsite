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
