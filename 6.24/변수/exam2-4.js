var a = prompt('나이를 입력해주세요 : ');


console.log(typeof a);

if (a > 18 && typeof a != "number"){
    alert("성인입니다.");
} else if(a == 17 && typeof a != "number") {
    alert("미성년자 입니다." + 1 + "년만더 있다 오세요!");
} else if (a <= 18 && typeof a != "number"){
    alert("미성년자 입니다.");
} else {
    alert("숫자를 입력해주세요");
}