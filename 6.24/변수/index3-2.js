var day = prompt("요일을 입력해주세요 : ");

if(day == 'Monday' || day == 'Tuesday'){
    alert('월요병과.. 화요병으로 인해 굉장히 힘듭니다..');
} else if(day == 'Wednesday' || day == 'Thursday'){
    alert('한주의 반 정도 지났습니다. 조금만 더 힘을내 봅니다.');
} else if(day  == 'Friday'){
    alert('아싸 불금!!!');
} else {
    alert('주말은 자바스크립트 공부하는날!');
}