//buat sistem pesanan makanan sederhana
//1. tentukan menu & harga makanan
//   contoh: { 'Nasi Goreng': 20_000, 'Ayam Bakar': 25_000, 'Ayam Penyet': 15_000 }
//2. bikin object dengan format: {menu: 'Nasi Goreng', jumlah: 2, totalHarga: 40_000}
//3. masukan object ke array riwayatPembelian
//4. tampilkan riwayat pembelian
// expected output
// [{menu: 'Nasi Goreng', jumlah: 2, totalHarga: 40000}]

const menu = {
  'Nasi Goreng': 20_000,
  'Ayam Bakar': 25_000,
  'Ayam Penyet': 15_000,
}
const riwayatPembelian = [];

// Fungsi untuk membeli makanan
function beliMakanan(makanan, jumlah) {
  if (!menu[makanan]) {
    console.log('Menu tidak valid!');
    return;
  }
  const totalHarga = menu[makanan] * jumlah; // Menghitung total harga
  // Menghitung PPN 11% 
    const ppn = totalHarga * 0.11; // 11% PPN
    const totalHargaPPN = totalHarga + ppn; // Total harga setelah PPN
    const pembelian = { makanan, jumlah, totalHarga: totalHargaPPN }; // Membuat object pembelian
  // Menambahkan pembelian ke riwayat
  riwayatPembelian.push(pembelian);
}

// Fungsi untuk melihat riwayat pembelian
function lihatRiwayat() {
    console.log(riwayatPembelian);
}

//tampilan dalam tabel
function tampilkanRiwayat() {
  console.table(riwayatPembelian);
}   

// Contoh penggunaan
beliMakanan('Nasi Goreng', 2);
beliMakanan('Ayam Bakar', 1);
tampilkanRiwayat();
