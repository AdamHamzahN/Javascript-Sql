let sepatu = [
    { nama: "New Balance NB530", harga: 390000 },
    { nama: "Nike Vomero 5", harga: 350000 },
    { nama: "Adidas Samba", harga: 180000 },
    { nama: "Onitsuka Tiger Mexico", harga: 420000 },
];
let diskon;
let totalBelanja = 0;
sepatu.forEach((e, i) => {
    totalBelanja += sepatu[i].harga;
});

if (totalBelanja < 250000) {
    diskon = 0;
} else if (totalBelanja >= 250000 && totalBelanja < 500000) {
    diskon = 5;
} else if (totalBelanja >= 500000 && totalBelanja < 800000) {
    diskon = 10;
} else if (totalBelanja >= 800000) {
    diskon = 15;
}

let totalSetelahDiskon = totalBelanja - (diskon / 100 * totalBelanja);

console.log("====== Rincian Belanja Sepatu =============");
sepatu.forEach((e, i) => {
    console.log(`${i + 1}. ${sepatu[i].nama} - Rp. ${sepatu[i].harga}`);
})
console.log(`Total Belanja : Rp. ${totalBelanja}`);
console.log(`Diskon : ${diskon}%`);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${1200000}`);
console.log(`Kembalian = Rp. ${1200000 - totalSetelahDiskon}`);