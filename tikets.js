//buat sistem tiket sederhana tanpa CLI
//1. tentukan kategori & harga tiket
//2. bikin object dengan format: {kategori: 'anak-anak', jumlah: 2, totalHarga: 50_000}
//3. masukan object ke array riwayatPembelian
//4. tampilkan riwayat pembelian
// expected output
// [{kategori: 'anak-anak', jumlah: 2, totalHarga: 50000}]

const hargaTiket = {
  'anak-anak': 25_000,
  'dewasa': 50_000,
  'lansia': 30_000
};

const riwayatPembelian = [];

// Fungsi untuk membeli tiket
function beliTiket(kategori, jumlah) {
  const totalHarga = hargaTiket[kategori] * jumlah;
  const ppn = totalHarga * 0.11; // 11% PPN
  const totalHargaPPN = totalHarga + ppn;
  const tiket = { 
    kategori, 
    jumlah, 
    totalHarga: totalHargaPPN  };
  riwayatPembelian.push(tiket);
}

// Fungsi untuk melihat riwayat pembelian
function lihatRiwayat() {
  if (riwayatPembelian.length === 0) {
    console.log('Belum ada riwayat pembelian.');
  } else {
    console.log('Riwayat Pembelian:');
    riwayatPembelian.forEach((tiket, index) => {
      console.log(`${index + 1}. Kategori: ${tiket.kategori}, Jumlah: ${tiket.jumlah}, Total Harga: Rp. ${tiket.totalHarga.toLocaleString('id-ID')}`);
    });
  }
}
// Contoh penggunaan
beliTiket('anak-anak', 2);
lihatRiwayat();
beliTiket('dewasa', 2);
lihatRiwayat();
beliTiket('lansia', 3);
lihatRiwayat();



