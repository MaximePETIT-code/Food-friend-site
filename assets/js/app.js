function user() {
    document.getElementById("user").style.display = "block";
    document.getElementById("user-link").style.color = "#1A1A1A";
    document.getElementById("restorer").style.display = "none";
    document.getElementById("user-img").style.display = "block";
    document.getElementById("restorer-img").style.display = "none";
    document.getElementById("delivery-img").style.display = "none";
    document.getElementById("restorer-link").style.color = "#107775";
    document.getElementById("delivery").style.display = "none";
    document.getElementById("delivery-link").style.color = "#107775";
}

function restorer() {
    document.getElementById("restorer").style.display = "block";
    document.getElementById("restorer-link").style.color = "#1A1A1A";
    document.getElementById("user-img").style.display = "none";
    document.getElementById("delivery-img").style.display = "none";
    document.getElementById("restorer-img").style.display = "block";
    document.getElementById("user").style.display = "none";
    document.getElementById("user-link").style.color = "#107775";
    document.getElementById("delivery").style.display = "none";
    document.getElementById("delivery-link").style.color = "#107775";
}

function delivery() {
    document.getElementById("delivery").style.display = "block";
    document.getElementById("delivery-link").style.color = "#1A1A1A";
    document.getElementById("user").style.display = "none";
    document.getElementById("delivery-img").style.display = "block";
    document.getElementById("user-img").style.display = "none";
    document.getElementById("restorer-img").style.display = "none"
    document.getElementById("user-link").style.color = "#107775";
    document.getElementById("restorer").style.display = "none";
    document.getElementById("restorer-link").style.color = "#107775";
}

function opinion1(){
    document.getElementById("opinion1").style.display = "block";
    document.getElementById("btn-opinion-1").style.opacity = "1";
    document.getElementById("btn-opinion-2").style.opacity = "0.25";
    document.getElementById("btn-opinion-3").style.opacity = "0.25";
    document.getElementById("opinion2").style.display = "none";
    document.getElementById("opinion3").style.display = "none";
}

function opinion2(){
    document.getElementById("opinion2").style.display = "block";
    document.getElementById("btn-opinion-2").style.opacity = "1";
    document.getElementById("btn-opinion-1").style.opacity = "0.25";
    document.getElementById("btn-opinion-3").style.opacity = "0.25";
    document.getElementById("opinion1").style.display = "none";
    document.getElementById("opinion3").style.display = "none";
}

function opinion3(){
    document.getElementById("opinion3").style.display = "block";
    document.getElementById("btn-opinion-3").style.opacity = "1";
    document.getElementById("btn-opinion-1").style.opacity = "0.25";
    document.getElementById("btn-opinion-2").style.opacity = "0.25";
    document.getElementById("opinion1").style.display = "none";
    document.getElementById("opinion2").style.display = "none";
}
