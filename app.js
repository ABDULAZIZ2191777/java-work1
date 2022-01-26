var Mylogin = "Abdulaziz"
var Mypassword = "1234"

function Show()  {
    var Login = document.getElementById("1inp").value;
    var Password = document.getElementById("2inp").value;
    var h1true = document.getElementById("h1true");
    var h1false = document.getElementById("h1false");

    if (Login === Mylogin && Password === Mypassword) {
        window.open('./type.html')


        h1true.innerHTML = "You man good job";
    } else {
        h1false.innerHTML = "Oooo Shit man!"
    }


}
function Change() {
    var sss = document.getElementById('sss').value
    var dz = document.getElementById('dz')
    dz.style.fontFamily = sss;
    var sss1 = document.getElementById('sss1').value
    var dz = document.getElementById('dz')
    dz.style.color = sss1;
    var sss2 = document.getElementById('sss2').value
    var dz = document.getElementById('dz')
    dz.style.fontSize = sss2;
    var sss3 = document.getElementById('sss3').value
    var dz = document.getElementById('dz')
    dz.style.fontWeight = sss3;
    var sss4 = document.getElementById('sss4').value
    var dz = document.getElementById('dz')
    dz.style.textTransform = sss4
}