let str = "1234567891";

function noHP(item){
    let pattern = /^[0-9]{10,12}$/g;

    if(pattern.test(item)){
        console.log("Benar");
    }
    else{
        console.log("Harus angka dan minimal 10 digit - maksimum 12 digit");
    }
}

noHP(str);