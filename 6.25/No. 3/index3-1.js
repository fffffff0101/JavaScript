var prices = ["1000원", "2000원", "3000원"];
var total = 0;

// 방안 1
// for(var i = 0; i < prices.length; i++){
//     prices[i] = parseInt(prices[i].replace("원", ""));
//     total += prices[i];
// }


// 방안 2
// for(var i = prices.length - 1; i >= 0; i--){
//     prices[i] = Number(prices[i].substr(0, 4));
//     total += prices[i];
// } 
// 비추 한다 10000원 이면 '0원'이 짤려버린다
// 그러면 10000이 1000으로 들어간다

// 방안 3
// for(var i = 0; i < prices.length; i++){
//     var pricesText = prices[i];
//     var price = parseInt(pricesText.slice(0, -1));
//     total += price;
// }

console.log("합계 : ", total);