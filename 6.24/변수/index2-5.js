var num = 10;

if (typeof num == 'number'){
    if(num > 0){
        console.log("양수입니다.");
    } else if (num == 0){
        console.log("0 입니다.");
    } else {
        console.log("음수입니다.");
    }
} else {
    console.log("숫자가 아닙니다.");
}