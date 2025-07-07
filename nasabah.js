// Original code for reference non destructured version
// function daftarNasabahLolos(nasabah) {
//     const hasil = {};
//     for (let n of nasabah) {
//         if (n.nilaiKredit > 75) { // Cek apakah nilaiKredit lebih dari 75
//             if (!hasil[n.kelasKredit]) { // Jika kelasKredit belum ada di hasil
//                 hasil[n.kelasKredit] = []; // Inisialisasi array untuk kelasKredit tersebut
//             }
//             // Tambahkan nama dan nilaiKredit ke dalam kelasKredit yang sesuai
//             hasil[n.kelasKredit].push({
//                 nama: n.nama,
//                 nilaiKredit: n.nilaiKredit
//             });
//         }
//     }
//     return hasil;
// }

// // Contoh penggunaan
// const daftarnasabah = [
//     { nama: "Bagus", nilaiKredit: 80, kelasKredit: "Platinum" },
//     { nama: "Bagas", nilaiKredit: 75, kelasKredit: "Gold" },
//     { nama: "Davis", nilaiKredit: 90, kelasKredit: "Silver" },
//     { nama: "Arief", nilaiKredit: 60, kelasKredit: "Platinum" },
//     { nama: "Wawan", nilaiKredit: 85, kelasKredit: "Gold" },
//     { nama: "Diana", nilaiKredit: 70, kelasKredit: "Silver" },
//     { nama: "Andi", nilaiKredit: 95, kelasKredit: "Platinum" }
// ];

// const nasabahLolos = daftarNasabahLolos(daftarnasabah);
// console.log(nasabahLolos);

//contoh code  dengan destructuring
function daftarNasabahLolos(nasabah) {
    const hasil = {};
    for (let { nama, nilaiKredit, kelasKredit } of nasabah) {
        if (nilaiKredit > 75) {
            if (!hasil[kelasKredit]) {
                hasil[kelasKredit] = [];
            }
            hasil[kelasKredit].push({
                nama,
                nilaiKredit
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
console.log("Kelompok Platinum:", nasabahLolos["Platinum"]);
console.log("Kelompok Gold:", nasabahLolos["Gold"]);
console.log("Kelompok Silver:", nasabahLolos["Silver"]);


