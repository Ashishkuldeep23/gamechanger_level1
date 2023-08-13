
// // // Locomotive copied code from github.


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function onLoadAnimation() {

    let tl = gsap.timeline()

    tl.from("#nav", {
        y: "-20",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        .to(".animi_content", {
            y: 0,
            ease: Expo.easeInOut,
            duartion: 2,
            delay: -1,
            stagger: .2
        })

        .from("#home_footer", {
            y: "-20",
            opacity: 0,
            duartion: 1.5,
            ease: Expo.easeInOut
        })

        .from("#second_main", {
            y: "50",
            opacity: 0,
            duartion: 1.5,
            ease: Expo.easeInOut
        })

        .from("#third_main", {
            y: "50",
            opacity: 0,
            duartion: 1.5,
            ease: Expo.easeInOut
        })

        .from("#last_footer", {
            y: "50",
            opacity: 0,
            duartion: 1.5,
            ease: Expo.easeInOut
        })

}







var timeOut;


function mouseSkew() {

    let xscale = 1;
    let yscale = 1;

    let preXValue = 0
    let preYValue = 0

    window.addEventListener("mouseover", function (dets) {

        clearTimeout(timeOut)

        xscale = gsap.utils.clamp(0.6, 1.4, dets.clientX - preXValue)
        yscale = gsap.utils.clamp(0.6, 1.4, dets.clientY - preYValue)

        // console.log(xscale , yscale)

        preXValue = dets.clientX;
        preYValue = dets.clientY;


        fallowMouse(xscale, yscale)    // // // Working but when mouse stop back to previous state.


        timeOut = setTimeout(function () {
            // console.log("Ak")
            fallowMouse(1, 1)      // // // Calling mouse skew function.
        }, 100)

    })
}




function fallowMouse(xVal, yVal) {
    // // // x and y value give by skewMouse function.

    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#fallow_mouse").style.transform = `translate(${dets.clientX - 150}px, ${dets.clientY}px) scale(${xVal} , ${yVal})`;     // // -150 becoz in css i'm given left 150px (remove 150px if mouse move.)
    })

}




mouseSkew();
onLoadAnimation();
fallowMouse();



// // // Code second main
// // Show images 


document.querySelectorAll(".elem").forEach(function (singleElem) {


        // console.log(singleElem.getBoundingClientRect().top)


        // // // Both var for rotate
        let rotate = 0;
        let preValue = 0


        // // // Pic hide 
        singleElem.addEventListener("mouseleave", function (details) {

            gsap.to(singleElem.querySelector("img"), {
                opacity: 0,
                ease: Power1,
            })

        })


        // //  // pic visiable
        singleElem.addEventListener("mousemove", function (details) {


            // singleElem.querySelector(".image_in_second").style.transform =  `translate(${details.clientX}px , 0px)`

            // console.log(details.clientY , singleElem.getBoundingClientRect().top , singleElem.getBoundingClientRect().y)

            let yDiff = details.clientY - singleElem.getBoundingClientRect().y;

            // console.log(yDiff)



            preValue = details.clientX - rotate;
            rotate = details.clientX


            gsap.to(singleElem.querySelector("img"), {
                opacity: 1,
                ease: Power1,
                top: yDiff - 40,
                left: details.clientX - 150,
                rotate: gsap.utils.clamp(-10, 10, preValue)
            })




        })

    })




