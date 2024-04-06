function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locoScroll()

function cursorEffects() {

    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")


    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })


    })

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1

        })
    })

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0

        })
    })
}

cursorEffects()


function page2aniamtion() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2

        }

    })
}

page2aniamtion()


var tl = gsap.timeline()

tl.from("#loader h3", {
    x: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1,

})

tl.to("#loader h3", {
    opacity: 0,
    stagger: 0.1,
    x: -20,
    duration: 0.8,

})
tl.to("#loader", {
    opacity: 0,
})
tl.from("#page1-content h1 span", {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.5

})
tl.to("#loader", {
    display: "none"
})



function openNav() {
    document.getElementById("myNav").style.height = "80vh";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}



// loco smooth scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.08
});

// for deleting data after submission
function fun() {

    document.getElementById('email').value = '';

}


//buttontohome
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}