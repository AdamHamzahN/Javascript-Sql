const fs = require('fs');

const filePath = "siswa.json";

// cek apakah file sudah ada
if (fs.existsSync(filePath)){
    const content = fs.readFileSync(filePath, "utf8");
    daftar = JSON.parse(content);
}


let siswaBaru1 = [
    {
        nama: "Sunflower",
        kelas: "web",
        nilai: [93,97,83]
    }
];


let siswaBaru2 = [
    {
        nama: "Magnolia",
        kelas: "web",
        nilai: [98, 77, 68]
    }
];

//tambahkan ke array
daftar.push(siswaBaru1);
daftar.push(siswaBaru2);

//simpan kembali ke file
fs.writeFileSync("siswa.json",JSON.stringify(daftar,null,2));
console.log("Data siswa berhasil ditambahkan ke file siswa.json");