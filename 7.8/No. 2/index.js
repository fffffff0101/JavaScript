// Part 1

// var randomNum = Math.random();

// console.log(randomNum);

// // 0 ~ 1사이의 무작위 숫자가 나온다.

// Part 2

// var randomNum = Math.round(4.5);

// console.log("반올림 : " + randomNum);

// // 반올림

// var ceilNum = Math.ceil(4.4);

// console.log("올림 : " + ceilNum);

// // 올림

// var floorNum = Math.floor(5.8);

// console.log("내림 : " + floorNum);

// // 내림

// var maxNum = Math.max(3, 7, 2, 5, 9);

// console.log("최댓값 : " + maxNum);

// // 최댓값

// var minNum = Math.min(3, 7, 2, 5, 9);

// console.log("최솟값 : " + minNum);

// // 최솟값

// Part 3


// function lottocheck(){
//     var num = [];

//     while(num.length < 6){
//         var randomNum = Math.floor(Math.random() * 45) + 1;

//         if(num.indexOf(randomNum) === -1){
//             num.push(randomNum);
//         }
//     }

//     return num.sort();
// }

// var myLuckyNum = lottocheck();

// alert(myLuckyNum);


// Part 4

// var today = new Date();
// console.log(today);

// // 년도만 뽑기
// console.log(today.getFullYear());

// console.log(today.getMonth() + 1);
// console.log(today.getDate());


// function getTodayDate(){
//     console.log(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
// }

// var todayDate = getTodayDate();
// // 2023-07-08

// Part 5


// setInterval(function (){
//     var curTime = document.getElementsByClassName('curTime');
//     // curTime.innerHTML = getTodayDate();
//     // curTime.innerHTML = `<input type="text" value="${getTodayDate()}"/>`;
//     curTime[1].innerHTML = getTodayDate();
//     curTime[2].innerText = getTodayDate();

// }, 1000);

// function getTodayDate(){
//     var today = new Date();
//     var year = today.getFullYear();
//     var month = today.getMonth() + 1;
//     var date = today.getDate();
//     var hour = today.getHours();
//     var minute = today.getMinutes();
//     var sec = today.getSeconds();


//     return `${year}-${month}-${date} ${hour}:${minute}:${sec}`;
// }

// function stop() {
//     alert("중지되었습니다.");

//     var curTime = document.getElementsByClassName('curTime');

//     curTime[1].innerHTML = document.write("중지되었습니다.");
//     curTime[2].innerHTML = document.write("중지되었습니다.");
// }

// var todayDate = getTodayDate();
// console.log(todayDate);

// Part 6

// var div = document.getElementsByClassName("curTime");
// div[0].style.color = "red";
// console.log(div[0]);

// div[2].style.backgroundColor = "black";
// div[2].style.color = "white";


// Part 7

// var h1 = document.createElement("h1");
// h1.innerText = "안녕";

// console.log(document);
// console.log(document.body);

// document.getElementsByClassName("curTime")[0].appendChild(h1);

// 아마 이것도 그런것 같다.....
