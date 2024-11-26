gsap.from('.home_img-1', 5, {
    opacity: 0, 
    x: 400, 
    onComplete: function() {
        gsap.to('.home_img-1', 12, {
            x: '-=10', 
            y: '+=50', 
            yoyo: true, 
            repeat: -1, 
            ease: 'sine.inOut'
        });
    }
});
gsap.from('.home_img-6', 1.5, {opacity: 0, y: 200, delay: .1, ease: 'back.out(1.5)'})
gsap.from('.home_img-3', 1.5, {opacity: 0, y: 400, delay: .3, ease: 'back.out(1.5)'})
gsap.from('.home_img-5', 1.5, {opacity: 0, y: 400, delay: .5, ease: 'back.out(1.5)'})
gsap.from('.home_img-2', 1.5, {opacity: 0, y: 400, delay: .8, ease: 'back.out(1.5)'})
gsap.from('.home_img-4', 1.5, {
    opacity: 0, 
    y: 200, 
    delay: 1.8, 
    ease: 'back.out(1.5)',
    onComplete: function() {
        gsap.to('.home_img-4', 1.5, {
            y: 10, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut'
        });
    }
});
gsap.from('.home__data', 1.5, {opacity: 0, y: -100, delay: 2.5, ease: 'back.out(1.5)'})
