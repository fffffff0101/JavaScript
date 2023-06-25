var isLoggedIn = true;
var userRole = "admin";
var pageAccessAllowed = false;

// if문입니다 아마도 if문 1줄 작성입니다.
if(isLoggedIn == true){if(userRole == "admin"){alert("페이지 접근이 허용되었습니다.");}else if(userRole == "user" && pageAccessAllowed == false){alert("페이지 접근에 제한되었습니다.");}else if (userRole == "user" && pageAccessAllowed == true){alert("페이지 접근에 허용되었습니다.");}else {alert("페이지 접근에 제한되었습니다.")}} else {alert("페이지에 접근이 제한되었습니다.");}