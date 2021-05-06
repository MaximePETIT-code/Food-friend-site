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


$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
});