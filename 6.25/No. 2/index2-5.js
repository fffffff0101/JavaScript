var arr = [];

for(var i = 1; i <= 100; i++){
    arr.push(i);
}

console.log(arr);

for(var i = 0; i <= 100; i++){
    if(i % 2 == 1){
        delete arr[i];
    }
}

console.log(arr);

for(var i = arr.length; i >= 0; i--){
    if(arr[i] % 2 === 0){
        arr.splice(i, 1);
    }
}

console.log(arr);