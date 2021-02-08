function findKalimat(item){
    let pattern = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/g;

    if(pattern.test(item)){
        console.log("Karakter ditemukkan");
    }
    else{
        console.log("Tidak ada karakter yang ditemukan");
    }
}

findKalimat("Bootcamp impact byte");