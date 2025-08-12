function bagiAngka(a, b) {
    try{
        if( b == 0){
            throw new Error("Tidak membagi dengan nol");
        }else{
            let hasil = a / b;
            console.log("Hasil Pembagian adalah : " + hasil);
        }
    }catch(e){
        console.log("Erorr : " + e.message)
    }
}
let angka1 = 10;
let angka2 = 0;

try {
    bagiAngka(angka1, angka2)
} catch (error) {
    console.log("Terjadi kesalahan lain :" + error.message)
}

console.log("Program Selesai");