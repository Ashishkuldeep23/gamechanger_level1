
// // // Locomotive copied code from github.


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function onLoadAnimation(){

    let tl = gsap.timeline()

    tl.from("#nav",{
        y : "-20" ,
        opacity : 0 ,
        duration : 1.5 ,
        ease : Expo.easeInOut
    })

    .to(".animi_content" , {
        y : 0 ,
        ease : Expo.easeInOut ,
        duartion : 2,
        delay : -1,
        stagger : .2
    })

    .from("#home_footer" , {
        y :"-20",
        opacity : 0 ,
        duartion : 1.5,
        ease : Expo.easeInOut 
    })

    .from("#second_main" , {
        y :"50",
        opacity : 0 ,
        duartion : 1.5,
        ease : Expo.easeInOut 
    })

    .from("#third_main" , {
        y :"50",
        opacity : 0 ,
        duartion : 1.5,
        ease : Expo.easeInOut 
    })

    .from("#last_footer" , {
        y :"50",
        opacity : 0 ,
        duartion : 1.5,
        ease : Expo.easeInOut 
    })

}






function fallowMouse(){
    window.addEventListener("mousemove" , function(dets){

        document.querySelector("#fallow_mouse").style.transform = `translate(${dets.clientX-150}px, ${dets.clientY}px)`;     // // -150 becoz in css i'm given left 150px (remove 150px if mouse move.)

    })
}


onLoadAnimation()
fallowMouse()
