let daftarBelanja = [];
daftarBelanja.push("Beras", "Minyak" , "Gula");

daftarBelanja.splice(daftarBelanja.indexOf("Minyak"),1,"Buah");

daftarBelanja.push("Sayur","Telur");

daftarBelanja.sort();

console.log("Daftar Belanja Ibu Lily :")
daftarBelanja.forEach((e,i) => {
    console.log(`${i+1}. ${e}`);
})