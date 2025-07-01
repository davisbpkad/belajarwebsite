const jumlahAnak = 2;
const gajiPokok = 5000000;
const gaji = hitungGaji(gajiPokok, jumlahAnak);
console.log("Gaji yang diterima: " + gaji);
console.log("Gaji pokok: " + gajiPokok);
console.log("Jumlah anak: " + jumlahAnak);
console.log("Tunjangan keluarga: " + hitungTunjangan(gajiPokok, jumlahAnak));
console.log("Pajak penghasilan: " + hitungPPH(gajiPokok));

function hitungGaji(gajiPokok, jumlahAnak) {
    //tunjangan keluarga
    const tunjanganKeluarga = hitungTunjangan(gajiPokok, jumlahAnak);
    
    //pajak penghasilan
    const pajakPenghasilan = hitungPPH(gajiPokok);

    //gaji = gaji pokok + tunjangan keluarga - pajak penghasilan
    const gaji = gajiPokok + tunjanganKeluarga - pajakPenghasilan;
    return gaji;    
}

function hitungTunjangan(gajiPokok, jumlahAnak= 0) {
    //tunjangan anak 2% per anak dari gaji pokok
    let tunjanganAnak = 0;
    if (jumlahAnak > 0) {
        tunjanganAnak = gajiPokok * 0.02 * jumlahAnak;
    }

    //tunjangan keluarga 10% dari gaji pokok
    const tunjanganKeluarga = gajiPokok * 0.1;
    return tunjanganKeluarga + tunjanganAnak;
}
function hitungPPH(gajiPokok) {
    //pajak penghasilan 5% dari gaji pokok
    const pajakPenghasilan = gajiPokok * 0.05;
    return pajakPenghasilan;
}

