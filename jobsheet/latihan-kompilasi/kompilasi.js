let input = 5;

try{
    let angka  = parseInt(input);
    if(isNaN(angka)){
        throw new Error("input harus berupa angka");
    }
    console.log("kuadrat :", angka*angka);
}catch(e){
    console.error("Terjadi kesalahan:",e.message);
}