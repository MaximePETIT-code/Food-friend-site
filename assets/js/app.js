// Votre fichier est un peu long, notamment à cause de nombreuses fonctions dupliquées
// Il est possible de séparer votre fichiers en plusieurs parties comme le CSS, et comme le CSS, l'ordre d'importation des fichiers compte
const headerTop = document.querySelectorAll('.header-top');
const headerContain = document.querySelector('.header-contain');
const scroll = document.querySelector('.scroll');
const back = document.querySelector('.back');
const contact = document.querySelector('.contact-content');


if (window.matchMedia("(min-width: 1000px)").matches) {
    window.addEventListener('load', () => {

        const TL = gsap.timeline({paused: true});
    
        TL
        .to(headerTop, 1, {opacity: 1, ease: "power2.out"}, 0)
        .to(headerContain, 1.5, {translateY: '0px', opacity: 1, ease: "power2.out"}, 0, '-=1')
        .to(scroll, 1, {opacity: 1, ease: "power2.out"}, 0.2, '-=2')
        TL.play();
    })
}

if (window.matchMedia("(min-width: 1227px)").matches) {
    // L'évènement resize est à utiliser avec extrême parcimonie
    // Il est très couteux en ressource
    window.onresize = function(event)
    {
        // Très mauvaise pratique accessibilité le rechargement de page. A éviter.
        document.location.reload(true);
    }

    // le mot-clé "var", il ne faut plus l'utiliser de nos jours. Il faut utiliser :
    // - const : pour les constantes, la variable n'estp as réassigner
    // - let : pour les variables
    // "var" pose le problème du "hoisting" qui pose plein d'effets de bords
    // Plus d'explications : https://developer.mozilla.org/fr/docs/Glossary/Hoisting
    var controller = new ScrollMagic.Controller();


    var scroller = new TimelineMax()

    .to(".scroll", {opacity: 0}, 0)

    new ScrollMagic.Scene({
        triggerElement: ".intro",
        triggerHook: 1
    })

    .setTween(scroller)
    .addTo(controller);

    
    function splitScroll() {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: "1000px",
            triggerElement: ".app_visu",
            triggerHook: 0
            })

        .setPin(".app_visu")
        .addTo(controller);
    }
    splitScroll();


    var phoneChange1 = new TimelineMax()

    .to(".phone", {attr:{src: "assets/images/appvisu-commandes.png"}}, 0)

    new ScrollMagic.Scene({
        triggerElement: ".step2",
        triggerHook: 0.3
    })

    .setTween(phoneChange1)
    .addTo(controller);

    var phoneChange2 = new TimelineMax()

    .to(".phone", {attr:{src: "assets/images/appvisu-livraison.png"}}, 0)

    new ScrollMagic.Scene({
        triggerElement: ".step3",
        triggerHook: 0.3
    })

    .setTween(phoneChange2)
    .addTo(controller);

}

var button = document.querySelectorAll('.button-contact');

$(document).on('mousemove touch', function(e){
  magnetize('.button-contact', e);
});

function magnetize(el, e){
  var mX = e.pageX,
      mY = e.pageY;
  const item = $(el);
  
  const customDist = item.data('dist') * 20 || 120;
  const centerX = item.offset().left + (item.width()/2);
  const centerY = item.offset().top + (item.height()/2);
  
  var deltaX = Math.floor((centerX - mX)) * -0.45;
  var deltaY = Math.floor((centerY - mY)) * -0.45;
  
  var distance = calculateDistance(item, mX, mY);
    
  if(distance < customDist){
    TweenMax.to(item, 0.5, {y: deltaY, x: deltaX, scale:1.1});
    item.addClass('magnet');
  }
  else {
    TweenMax.to(item, 0.6, {y: 0, x: 0, scale:1});
    item.removeClass('magnet');
  }
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/1.4)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2.2)));
}

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
