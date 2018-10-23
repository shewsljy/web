function functionOfHead() {
    document.getElementById("head").innerHTML = "My First JavaScript Function On Head";
}

function functionOfBodyBefore() {
    document.getElementById("bodyBefore").innerHTML = "My First JavaScript Function On BodyBefore";
}

function functionOfBodyAfter() {
    //var bodyString; //undefined
    var bodyString = "On BodyAfter";
    document.getElementById("bodyAfter").innerHTML = "My First JavaScript Function "+bodyString;
}

function functionOfBodyAfterCharge() {
    document.write("Nothing on body after script document write");
    document.write("<br>");
    document.write("Hello \
        World!");
}

function validate_required(field,alerttext) {
    with (field) {
        if (value==null||value=="") {
            alert(alerttext);
            return false;
        }
        else {
            return true;
        }
    }
}

function validate_form(thisForm) {
    with (thisForm) {
        if (validate_required(email,"Email must be filled out!")==false) {
            email.focus();
            return false;
        }
    }
}

function validate_email(field,alerttext) {
    with (field) {
        apos=value.indexOf("@");
        dotpos=value.lastIndexOf(".");
        if (apos<1||dotpos-apos<2) {
            alert(alerttext);
            return false;
        }
        else {
            return true;    
        }
    }
}

function displayAlert() {
    alert("我是警告框！！");
}

function displayAlertAdd() {
    alert("我是警告框！！" + "\n" + "带有折行的。");
}

function displayConfirm() {
    var r = confirm("请选择确认或者取消");
    if (r == true) {
        alert("你选择确认");
    }
    else {
        alert("你选择取消");
    }
}

function displayPrompt() {
    var name = prompt("请输入您的名字","比如：张三");
    if (name != null && name != "") {
        document.write("您好！" + name + "，今天过的咋样？");
    }
}

function timeoutStart() {
    document.getElementById("txt").value = c;
    c = c + 1;
    t = setTimeout("timeoutStart()", 1000);
}

function timeoutStop() {
    clearTimeout(t)
}

function getCookie(cookieName) {
    if (document.cookie.length > 0) {
        var cookieStart = document.cookie.indexOf(cookieName + "=");
        //"cookieLocalTest=testName"
        //"userName=jiayu;cookieLocalTest=testName"
        console.log(cookieStart);
        if (cookieStart != -1) {
            cookieStart = cookieStart + cookieName.length + 1;
            console.log(cookieStart);
            var cookieEnd = document.cookie.indexOf(";",cookieStart);
            console.log(cookieEnd);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
                console.log(cookieEnd);
            }
            console.log(unescape(document.cookie.substring(cookieStart,cookieEnd)));
            return unescape(document.cookie.substring(cookieStart,cookieEnd));
        }
    }
    return "";
}

function setCookie(cookieName,value,expireDays) {
    var exDate = new Date();
    exDate.setDate(exDate.getDate() + expireDays);
    document.cookie = cookieName + "=" + escape(value) + ((expireDays==null) ? "" : ";expires=" + exDate.toString());
    document.getElementById("testCookie").value = document.cookie;
}

function delCookie(cookieName) {
    var exDate = new Date();
    exDate.setTime(exDate.getTime() - 1);
    var isExitst = getCookie(cookieName);
    if(isExitst != null && isExitst != "") {
        document.cookie= cookieName + "="+ escape("del") + ";expires=" + exDate.toString();
    }
}

function checkCookie() {
    var isExitst = getCookie("userName");
    if (isExitst != null && isExitst != "") {
        var userName = document.cookie.split("=")[1];
        alert("Welcome again " + userName + "!");
        document.getElementById("testCookie").value = document.cookie;
    }
    else {
        var userName = prompt("Please enter your name:","");
        if (userName != null && userName != "") {
            setCookie("userName",userName,1);
        }
    }
}