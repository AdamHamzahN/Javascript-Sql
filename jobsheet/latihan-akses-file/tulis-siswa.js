const fs = require('fs');

let siswa = [
    {
        nama: "Lily",
        kelas: "web",
        nilai: [72, 92, 87]
    }
];
//Menyimpan data siswa ke file json
fs.writeFileSync("siswa.json",JSON.stringify(siswa,null,2));
console.log("Data siswa berhasil ditulis ke file siswa.json");