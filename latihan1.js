let str = 'Apakah huruf';

function kapital(item){
    let pattern = /[A-Z]/;

    if(pattern.test(item[0])){
        console.log("Huruf pertama adalah huruf besar");
    }
    else{
        console.log("Huruf pertama adalah huruf kecil");
    }
}

kapital(str);
kapital("ini kecil");