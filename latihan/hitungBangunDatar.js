function luasPersegi(sisi){
    return sisi*sisi
}

function kelilingPersegi(sisi){
    return 4* sisi;
}

function luasPersegiPanjang(panjang,lebar){
    return panjang * lebar;
}

function kelilingPersegiPanjang(panjang,lebar){
    return 2* (panjang * lebar);
}
function luasLingkaran(jarijari){
    return 22/7 * (jarijari**2);
}

function kelilingLingkaran(jarijari){
    return 2 * 22/7 * jarijari;
}

function luasSegitiga(alas,tinggi){
    return 1/2 * alas * tinggi
}

function kelilingSegitiga(sisi){
    return 3* sisi;
}

let persegiLuas = luasPersegi(8);
let persegiPanjangLuas = luasPersegiPanjang(9,3);
let lingkaranLuas = luasLingkaran(6);
let segitigaLuas = luasSegitiga(6,4);

let persegiKeliling = kelilingPersegi(8);
let persegiPanjangKeliling = kelilingPersegiPanjang(9,3);
let lingkaranKeliling = kelilingLingkaran(6);
let segitigaKeliling = kelilingSegitiga(6);

console.log("=============== Menghitung Luas dan Keliling Bangun Datar================");
console.log("");
console.log(">> Luas Bangun datar <<")
console.log(`Luas Persegi Dengan Sisi 8 adalah ${persegiLuas }`);
console.log(`Luas PersegiPanjang Dengan Panjang 9 dan Lebar 3 adalah ${persegiPanjangLuas}`);
console.log(`Luas Lingkaran Dengan jari - jari  6 adalah ${lingkaranLuas}`);
console.log(`Luas Segitiga  Dengan Alas 6 dan Tinggi 4 adalah ${segitigaLuas}`);

console.log("");
console.log(">> Keliling Bangun datar <<")
console.log(`Keliling Persegi Dengan Sisi 8 adalah ${persegiKeliling}`);
console.log(`Keliling PersegiPanjang Dengan Panjang 9 dan Lebar 3 adalah ${persegiPanjangKeliling}`);
console.log(`Keliling Lingkaran Dengan jari - jari  6 adalah ${lingkaranKeliling}`);
console.log(`Keliling Segitiga  Dengan Sisi 6 adalah ${segitigaKeliling}`);

