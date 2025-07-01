
const readline = require('readline');

// Membuat antarmuka readline untuk input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Harga tiket berdasarkan kategori umur
// Kategori: anak, dewasa, lansia
const hargaTiket = {
  anak: 25000,
  dewasa: 50000,
  lansia: 30000
};

// Array untuk menyimpan riwayat pembelian
const riwayatPembelian = [];

// Fungsi untuk menampilkan menu utama
function tampilkanMenu() {
  console.log('\n=== Sistem Tiket Sederhana ===');
  console.log('1. Beli Tiket');
  console.log('2. Lihat Riwayat');
  console.log('3. Keluar');
  rl.question('Pilih menu (1/2/3): ', (jawaban) => {
    if (jawaban === '1') {
      beliTiket();
    } else if (jawaban === '2') {
      lihatRiwayat();
    } else if (jawaban === '3') {
      console.log('Terima kasih!');
      rl.close();
    } else {
      console.log('Pilihan tidak valid.');
      tampilkanMenu();
    }
  });
}

// Fungsi untuk membeli tiket
function beliTiket() {
  // Menampilkan pilihan kategori umur
    rl.question('Masukkan kategori umur (anak/dewasa/lansia): ', (kategori) => {
    const kategoriLower = kategori.toLowerCase();
    if (!hargaTiket[kategoriLower]) {
      console.log('Kategori tidak valid!');
      return tampilkanMenu();
    }
    // Menampilkan harga tiket
    rl.question('Masukkan jumlah tiket: ', (jumlahStr) => {
      const jumlah = parseInt(jumlahStr);
      if (isNaN(jumlah) || jumlah <= 0) {
        console.log('Jumlah tiket tidak valid!');
        return tampilkanMenu();
      }
      const totalHarga = hargaTiket[kategoriLower] * jumlah;
      riwayatPembelian.push({
        kategori: kategoriLower,
        jumlah,
        totalHarga
      });
      console.log(`Total harga: Rp. ${totalHarga.toLocaleString('id-ID')}`);
      tampilkanMenu();
    });
  });
}

// Fungsi untuk melihat riwayat pembelian
function lihatRiwayat() {
  if (riwayatPembelian.length === 0) {
    console.log('Belum ada riwayat pembelian.');
  } else {
    console.log('\n=== Riwayat Pembelian ===');
    riwayatPembelian.forEach((item, i) => {
      console.log(
        `${i + 1}. Kategori: ${item.kategori}, Jumlah: ${item.jumlah}, Total: Rp. ${item.totalHarga.toLocaleString('id-ID')}`
      );
    });
  }
  tampilkanMenu();
}

// Mulai aplikasi
tampilkanMenu();