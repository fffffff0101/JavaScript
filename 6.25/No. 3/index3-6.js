function getMax(num1, num2){if(num1 > num2){return num1;}else if(num1 < num2){return num2;}else{return '=';}}
console.log(getMax(10, 7));
console.log(getMax(10, 17));
console.log(getMax(17, 17));

// 같으면 '='을 출력하고
// 수 비교를 하고 큰 수를 보여준다