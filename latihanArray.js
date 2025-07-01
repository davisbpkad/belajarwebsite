
//Latihan1 Array Javascript : Pengaturan Tempat Duduk di Acara Cabang Bank
//Anda diminta untuk membuat sistem pengaturan tempat duduk untuk sebuah acara cabang bank. 
// Dalam acara ini, karyawan akan duduk dalam kelompok, 
// dan pengaturan tempat duduk dibagi ke dalam beberapa kolom.
// Anda perlu mengimplementasikan sebuah fungsi bernama pengaturan Tempat Duduk, \
// yang akan mengatur karyawan ke dalam array multidimensi berdasarkan jumlah kolom 
// yang tersedia di tempat acara. Jika jumlah karyawan tidak cukup untuk mengisi satu baris penuh, 
// sisa kursi akan diberi tanda 'Kursi Kosong'.
// Spesifikasi Fungsi:
// Nama Fungsi: pengaturanTempatDuduk
// Parameter:
// 1.karyawan: sebuah array yang berisi nama-nama karyawan yang hadir di acara.
// 2.kolom: sebuah angka yang merepresentasikan jumlah kursi per baris (kolom). 
// Nilai minimal untuk kolom adalah 1. Jika kolom kurang dari 1, fungsi harus mengembalikan 'Invalid number'.


function susunKursi(pengunjung, cols) {
    const rows = Math.ceil(pengunjung.length / cols); // Menghitung jumlah baris berdasarkan jumlah pengunjung dan kolom
    const kursi = []; // Array untuk menyimpan pengaturan kursi
    let indexPengunjung = 0; // Indeks untuk melacak pengunjung yang sedang ditempatkan

    for (let i = 0; i < rows; i++) { // Loop untuk setiap baris
        const baris = [];   // Array untuk menyimpan kursi dalam baris  
        for (let j = 0; j < cols; j++) { // Loop untuk setiap kolom dalam baris
           let tamu = pengunjung[indexPengunjung]; //
            
           if (tamu === undefined) { // Jika tidak ada tamu yang tersisa untuk ditempatkan
                tamu = "kursi kosong"; // Jika tidak ada tamu, isi dengan 'Kursi Kosong'
            }
                
            baris.push(tamu); // Jika tidak ada tamu, isi dengan 'Kursi Kosong'
            indexPengunjung++; // Increment indeks pengunjung untuk menempatkan tamu berikutnya
        }
        kursi.push(baris); // Tambahkan baris yang telah diisi ke dalam array kursi
    }

    return kursi;
}

const pengunjung = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah', 'Ian', 'Jack'];

// const jumlahKolom = 3;
// const hasilSusunKursi = susunKursi(pengunjung, jumlahKolom);
console.log(susunKursi(pengunjung, 3));

//Anda diminta untuk mengimplementasikan sebuah sistem yang dapat menyaring nasabah dari data kredit 
// berdasarkan kelayakan mereka untuk mendapatkan persetujuan kredit.
//Anda harus membuat sebuah fungsi bernama daftarNasabahLolos, 
// yang akan memproses data nasabah dan menampilkan daftar nasabah yang lolos berdasarkan kriteria tertentu
//Spesifikasi Fungsi: 
// Nama Fungsi: daftarNasabahLolos
// Parameter:
// 1. nasabah: sebuah array of objects yang berisi data nasabah. 
// Setiap object memiliki properti berikut:
// nama: Nama nasabah.
// nilaiKredit: Skor kredit nasabah (angka).
// kelasKredit: Kelas kredit nasabah (string, misalnya: "Platinum", "Gold", "Silver").
//Fungsi harus menyaring nasabah yang memiliki skor kredit lebih besar dari 75.

// function daftarNasabahLolos(nasabah) {
//     // Filter nasabah dengan nilaiKredit > 75
//     const lolos = nasabah.filter(n => n.nilaiKredit > 75);

//     // Group by kelasKredit dan hanya tampilkan nama & nilaiKredit
//     const grouped = {};

//     // Mengelompokkan nasabah berdasarkan kelasKredit
//     lolos.forEach(n => {
//         if (!grouped[n.kelasKredit]) {
//             grouped[n.kelasKredit] = [];
//         }
//         grouped[n.kelasKredit].push({
//             nama: n.nama,
//             nilaiKredit: n.nilaiKredit
//         });
//     });
//     return grouped;
// }


function daftarNasabahLolos(nasabah) {
    const hasil = {};
    for (let n of nasabah) {
        if (n.nilaiKredit > 75) { // Cek apakah nilaiKredit lebih dari 75
            if (!hasil[n.kelasKredit]) { // Jika kelasKredit belum ada di hasil
                hasil[n.kelasKredit] = []; // Inisialisasi array untuk kelasKredit tersebut
            }
            // Tambahkan nama dan nilaiKredit ke dalam kelasKredit yang sesuai
            hasil[n.kelasKredit].push({
                nama: n.nama,
                nilaiKredit: n.nilaiKredit
            });
        }
    }
    return hasil;
}

// Contoh penggunaan
const daftarnasabah = [
    { nama: "Bagus", nilaiKredit: 80, kelasKredit: "Platinum" },
    { nama: "Bagas", nilaiKredit: 75, kelasKredit: "Gold" },
    { nama: "Davis", nilaiKredit: 90, kelasKredit: "Silver" },
    { nama: "Arief", nilaiKredit: 60, kelasKredit: "Platinum" },
    { nama: "Wawan", nilaiKredit: 85, kelasKredit: "Gold" },
    { nama: "Diana", nilaiKredit: 70, kelasKredit: "Silver" },
    { nama: "Andi", nilaiKredit: 95, kelasKredit: "Platinum" }
];

const nasabahLolos = daftarNasabahLolos(daftarnasabah);
console.log(nasabahLolos);



