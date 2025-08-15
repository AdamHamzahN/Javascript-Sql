let nasiGoreng = 25000;
let mieGoreng = 22000;
let capcay = 32000;
console.log("Harga Nasi Goreng = Rp. "+ nasiGoreng);
console.log("Harga Mie Goreng = Rp. "+ mieGoreng);
console.log("Harga Capcay = Rp. "+ capcay);

let totalHarga = nasiGoreng + mieGoreng + capcay;
console.log("Harga total = Rp. "+ totalHarga);
console.log("Diskon = 10%");

let diskon = 10/100 * totalHarga;
let hargaSetelahDiskon = totalHarga - diskon;

console.log("Harga Setelah Diskon = Rp. "+ hargaSetelahDiskon);

let pembayaran = 100000
let kembalian = pembayaran - hargaSetelahDiskon;

console.log("Pembayaran = Rp. "+ pembayaran);
console.log("Kembalian = Rp. "+kembalian);





