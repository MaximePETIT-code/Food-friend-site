var controller = new ScrollMagic.Controller();


// intro

var introAnim = new TimelineMax()

.fromTo(".scroll", 0.5, {opacity: 1}, {opacity: 0}, 0)
.fromTo("body", 1, {backgroundColor: "#169794"}, {backgroundColor: "#f4f8fe"}, 0)



new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 1
})


.setTween(introAnim)
.addIndicators()
.addTo(controller);


var introtextAnim = new TimelineMax()


.fromTo(".intro", 0.7, {translateY: "-35px", opacity: 0}, {translateY: "0", opacity: 1}, 0.2)



new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 0.9
})


.setTween(introtextAnim)
.addIndicators()
.addTo(controller);



// Phone anim

var phoneAnim = new TimelineMax()



new ScrollMagic.Scene({
    triggerElement: ".phone",
    triggerHook:0.1,
    duration: '1100'
})

.setPin(".phone")
.addIndicators( )
.addTo(controller);


// Change phone



var changePhone2 = new TimelineMax()
.to(".phone-img",{attr:{src: "assets/images/appvisu-commandes.png"}}, 0.22)

new ScrollMagic.Scene({
    triggerElement: ".commande",
    triggerHook:0.3,
})

.setTween(changePhone2)
.addIndicators( )
.addTo(controller);

var changePhone3 = new TimelineMax()

.to(".phone-img",{attr:{src: "assets/images/appvisu-livraison.png"}})

new ScrollMagic.Scene({
    triggerElement: ".livraison",
    triggerHook:0.5,
})

.setTween(changePhone3)
.addIndicators( )
.addTo(controller);