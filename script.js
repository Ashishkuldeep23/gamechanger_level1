
// // // Locomotive copied code from github.


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function fallowMouse(){
    window.addEventListener("mousemove" , function(dets){

        document.querySelector("#fallow_mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

    })
}


fallowMouse()
