let tinggi = [
    { nama: "Rose", tinggi: 178 },
    { nama: "Magnolia", tinggi: 153 },
    { nama: "Daisy", tinggi: 165 },
    { nama: "Jasmine", tinggi: 161 },
    { nama: "Violet", tinggi: 159 },
];

for (i = 0; i < tinggi.length; i++) {
    console.log(`${tinggi[i].nama} Memiliki tinggi ${tinggi[i].tinggi} cm`);
}

let tinggi2 = {
    Rose:178,
    Magnolia:153,
    Daisy:165,
    Jasine: 161,
    Violet:159
}

console.log("======= For in =================")
for(let nama in tinggi2){
    console.log(`${nama} Memiliki tinggi ${tinggi2[nama]} cm`);

}