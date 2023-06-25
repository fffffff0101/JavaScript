var day = prompt("요일을 입력해주세요 : ");

switch (day){
    case'Monday':
    case'Tuesday':
        alert("월요병과.. 화요병으로 인해 굉장히 힙듭니다..");
        break;
    case'Wednesday':
    case'Thursday':
        alert("한주의 반 정도 지났습니다. 조금만 더 힘을내 봅니다.");
        break;
    case'Friday':
        alert("아싸 불금!!!");
        break;
    default:
        alert("주말은 프론트엔드 수업 듣는날!");
        break;
}