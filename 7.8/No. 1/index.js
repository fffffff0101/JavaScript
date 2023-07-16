var information = [{name : "js", age: 100, address: "script"}];


function addStudents(){
    var student = [];
    student.name = prompt("학생의 이름을 입력해주세요.");
    student.age = prompt("학생의 나이를 입력해주세요.");
    student.address = prompt("학생의 거주 지역을 입력해주세요.");

    information.push(student);
}


function delStudents(){
    
    var delNum = prompt("삭제할 인덱스 번호를 입력하세요. (내가 원하는 번호에서 -1 더해서 넣어주세요)");

    if(delNum > information.length){
        alert("인덱스 범위를 초과하였습니다.");
    } else if(delNum < 0){
        alert("0보다 큰 숫자를 입력해주세요");
    } else {
        if(confirm("정말로 삭제하시겠습니까?")){
            information.splice(delNum, 1);
            alert("삭제되셨습니다.");
        }else {
            alert("취소되셨습니다.");   
        }
        
    }
}


function printStudents() {
    for(var i = 0; i < information.length; i++){
            console.log(information[i].name);
            console.log(information[i].age);
            console.log(information[i].address);
            console.log("--------------------");
    }
}

function fixStudents(){
    var fixNum = prompt("수정할 인덱스 번호를 입력하세요. (내가 원하는 번호에서 -1 더해서 넣어주세요)");
    
    if(fixNum > information.length){
        alert("인덱스 범위를 초과하였습니다.");
    } else if(fixNum < 0){
        alert("0보다 큰 숫자를 입력해주세요");
    } else {
        var fixName = prompt("수정할 이름을 입력하세요.");
        var fixAge = prompt("수정할 나이를 입력하세요.");
        var fixAddress = prompt("수정할 주소를 입력하세요");

        information[fixNum].name = fixName;
        information[fixNum].age = fixAge;
        information[fixNum].address = fixAddress;
        alert("수정되었습니다");
    }
}


