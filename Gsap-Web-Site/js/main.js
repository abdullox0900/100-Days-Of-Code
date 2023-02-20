gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'center',
            end: '750',
            scrub: true
        }
    })

    gsap.fromTo('.gallery__left .gallery__item', {x: -500, opacity: 0}, {
        opacity:1,
        x: 0,
        scrollTrigger: {
            trigger: '.gallery__item',
            scrub: true
        }
    })

    let elItemLef = gsap.utils.toArray('.gallery__left .gallery__item')

    elItemLef.forEach(element => {
        gsap.fromTo(element, {x: -500, opacity: 0}, {
            opacity:1,
            x: 0,
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: '-850',
                end: '-100'
            }
        })
    });
}