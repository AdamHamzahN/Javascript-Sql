let angka = 20;

for (i = 1; i <= angka; i++) {
    if (i % 2 !== 0 && i % 3 == 0) {
        console.log(i + " - Mengikuti Uji kompetensi")
    } else if (i % 2 == 0 && i % 3 == 0) {
        console.log(i + " - Mendapat Sertifikat");
    } else if(i % 2 == 0){
        console.log(i + " - Mengikuti Pelatihan");
    }else{
        console.log(i + " - Apel pagi")
    }
}