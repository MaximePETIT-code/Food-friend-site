if (window.matchMedia("(min-width: 1227px)").matches) {
    window.onresize = function(event)
    {
        document.location.reload(true);
    }

    var controller = new ScrollMagic.Controller();


    // intro

    var introAnim = new TimelineMax()

    .to(".scroll", 0.5, {opacity: 0}, 0)
    .fromTo("body", 1.5, {backgroundColor: "#169794"}, {backgroundColor: "#f4f8fe"}, 0)



    new ScrollMagic.Scene({
        triggerElement: ".intro",
        triggerHook: 1
    })


    .setTween(introAnim)
    .addTo(controller);


    $('.intro').each(function() {
        var introtextAnim = new TimelineMax()

        .to(".intro", 0.7, {translateY: "0", opacity: 1, ease: "power2.out"}, 0.2)
        

        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.9
        })

        .setTween(introtextAnim)
        .addTo(controller);

        var introtextHide = new TimelineMax()

        .to(".intro", 0, {translateY: "-35px", opacity: 0}, 1)

        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.9,
            duration: 1000
        })

        .setTween(introtextHide)
        .addTo(controller);
    })


    function splitScroll() {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: "220%",
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


function updatePercentage(){
    phoneFixed.progress()
}