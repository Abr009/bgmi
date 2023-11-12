var sub = document.getElementById("sub-btn")
var nav = document.getElementById("nav")
var footer = document.getElementById("footer")
var rnav = document.getElementById("rnav")
var navT = false;

var pTag = nav.querySelectorAll('p');
var navImg = document.getElementById("nav-img")
const screenWidth = window.innerWidth;


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



var p1 = document.getElementById("page1")
var p2 = document.getElementById("page2")
var p3 = document.getElementById("page3")
var p4 = document.getElementById("page4")
var p5 = document.getElementById("page5")

var fb = document.getElementById("fb")
var tw = document.getElementById("tw")
var gl = document.getElementById("gl")

var togglePass = document.getElementById("show-pass")
var pass = document.getElementById("password")

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
    if (document.getElementById("char-id").value != '' && document.getElementById("char-id").value.length >= 8) {
        if (document.getElementById("cpn-code").value == "X7N7-36H3-927J" && document.getElementById("cpn-code").value != '') {
            p1.style.display = 'none'
            p2.style.display = 'flex'
        }
        else{
            alert("Invalid Coupon Code")
        }
    }
    else {
        alert("Invalid character id")
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