const fs = require('fs');

const filePath = "film.json";

// Membaca file JSON
if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    daftar = JSON.parse(content);
}

//Array Film Baru
let filmBaru = [
    {
        nama: "Agak Laen Kau",
        tahun: 2024,
        genre: ["Horror", "Komedi"]
    }
    ,
    {
        nama: "Habibie & Ainun & Dia",
        tahun: 2012,
        genre: ["Drama", "Romantis"]
    },
    {
        nama: "Dilan 1991",
        tahun: 2018,
        genre: ["Romantis", "Komedi"]
    }
]

// Masukkan isi array film baru ke daftar
filmBaru.forEach((e,i)=>{
    daftar.push(filmBaru[i]);
})

//Menyimpan data / menulis ulang ke file JSON
fs.writeFileSync("film.json", JSON.stringify(daftar, null, 2));

// Membaca file JSON
let data = fs.readFileSync("film.json", "utf-8");
let filmArray = JSON.parse(data);

//Menampilkan film yang ada di file JSON
console.log("Daftar Film :");
filmArray.forEach((film, i) => {
    console.log(`${i + 1}. ${film.nama} (${film.tahun}) - ${film.genre}`)
});  
