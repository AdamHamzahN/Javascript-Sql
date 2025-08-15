let headset = 225000;
let mouse = 150000;
let keyboard = 350000;
let pembayaran = 800000;
let total = headset + mouse + keyboard;
let diskon;
let diskonvalue;

if(total < 250000){
    diskon = "0%"
    diskonValue = 0/100 * total;
}else if (total >= 250000 && total < 500000){
    diskon = "5%"
    diskonValue = 5/100 * total;
}else if(total >= 500000 && total < 800000){
    diskon = "10%"
    diskonValue = 10/100 * total;
}else{
    diskon = "15%"
    diskonValue = 15/100 * total;
}

let hargaSetelahDiskon = total-diskonValue;
let kembalian = pembayaran - hargaSetelahDiskon;

console.log("===== Rincian Pembelian =====");
console.log("Headset = Rp." + headset);
console.log("Mouse = Rp." + mouse);
console.log("Keyboard = Rp." + keyboa)
console.log("");
console.log("Total Belanja = Rp. "+ total);
console.log("Diskon "+ diskon);
console.log("Pembayaran = Rp. "+ pembayaran);
console.log("Kembalian = Rp. "+ kembalian);







