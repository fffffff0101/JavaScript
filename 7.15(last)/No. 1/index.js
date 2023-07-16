localStorage.setItem("input", "입력값");

var myInput = localStorage.getItem("input");


function del(){
    if (confirm('정말로 삭제하시겠습니까?')){
        localStorage.removeItem("input");
        alert("삭제되었습니다");
    } else{
        alert("취소되었습니다.");
    }
}

function popupNewWindow() {
    var searchValue = document.getElementById("searchValue").value;
    localStorage.setItem("searchValue", searchValue);

    window.open("popup.html");
}

// function clear() {
//     if(confirm("정말로 초기화 하시겠습니까?")){
//         if(confirm("진짜 마지막으로 물어봅니다 정말로 초기화 하시겠습니까?")){
//             localStorage.clear();
//         } else{
//             alert("취소되었습니다.");
//         }
//     } else{
//         alert("취소되었습니다.");
//     }
// }

