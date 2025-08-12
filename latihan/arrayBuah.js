let buah = [];

buah.push("Apel","Mangga","Jeruk","Semangka","Pisang","Anggur","Nanas");

buah.sort();
buah.forEach((e,i) => {
    console.log(`${i+1}. ${e}`);
});