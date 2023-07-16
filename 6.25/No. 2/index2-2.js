var students = [
    "소민",
    "세진",
    "호윤",
    "현규",
    "성훈",
    "지호",
    "효은",
    "희지",
    "폴"
];

console.log(students.indexOf("소민"));
// 결과 : 0

console.log(students.indexOf("세진"));
// 결과 : 1

console.log(students.includes("소민"));
// 결과 : true

console.log(students.includes("몰라요"));
// 결과 : false