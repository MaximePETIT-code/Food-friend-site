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
    
        .to(back, 1, {opacity: 1, ease: "power2.out"}, 0)
        .to(contact, 1.5, {opacity: 1, ease: "power2.out"}, 0, '-=1')
        
    
        
        
    
        TL.play();
    })
}


// const titreSpans = document.querySelectorAll('h1 span');
// const btns = document.querySelectorAll('.btn-first');
// const logo = document.querySelector('.logo');
// const medias = document.querySelectorAll('.bulle');
// const l1 = document.querySelector('.l1');
// const l2 = document.querySelector('.l2');

// window.addEventListener('load', () => {

//     const TL = gsap.timeline({paused: true});

//     TL
//     .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
//     .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
//     .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
//     .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
//     .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
//     .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

//     TL.play();
// })