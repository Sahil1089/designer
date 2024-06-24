
   
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp:0.07
});



let circlemouse=(xscale,yscale)=>{
    window.addEventListener("mousemove",(dets)=>{
        console.log(dets.clientX,dets.clientY);
        document.querySelector(".minicircle").style.transform=`translate(${dets.clientX}px , ${dets.clientY}px)  scale(${xscale},${yscale})`;
    })

}
circlemouse();

var tl = gsap.timeline();
tl.from(".nav",{
    y:-50,
    opacity:0,
    duration:1.5,
    delay:.4
})
tl.from(
    ".bounding",{
    y:100,
    opacity:0,
    duration:1.5,
    delay:-1,
    stagger:.28,
    ease:  Expo.easeInOut
}

)

tl.from(".herofooter",{
    y:-50,
    opacity:0,
    duration:1.5,
    delay:-1
})


let circlechapta=()=>{
    // default scale
    var xscale=1;
    var yscale=1;

    var xpre =0;
    var ypre =0;

    var timeout;

    window.addEventListener("mousemove",(dets)=>{
        clearTimeout(timeout);

       
        var xdiff= dets.clientX-xpre;
        var ydiff = dets.clientY - ypre;
        xpre = dets.clientX;
        ypre = dets.clientY;

      xscale=  gsap.utils.clamp(.8,1.2,xdiff);
       yscale= gsap.utils.clamp(.8,1.2,ydiff);

       circlemouse(xscale,yscale);



  timeout = setTimeout(()=>{
    document.querySelector(".minicircle").style.transform=`translate(${dets.clientX}px , ${dets.clientY}px)  scale(${xscale},${yscale})`;


  },100)


    });

}
circlechapta();



var im = document.querySelector(".page2 .e1");
im.addEventListener("mousemove",(dets)=>{









   gsap.to(im.querySelector("img"),{
    opacity:1,
    
   
    
   });
   
});

var ina = document.querySelector(".page2  .e2");
ina.addEventListener("mousemove",(d)=>{
   gsap.to(ina.querySelector("img"),{
    opacity:1
   });
});

var ima = document.querySelector(".page2 .elem3");
ima.addEventListener("mousemove",(d)=>{
   gsap.to(ima.querySelector("img"),{
    opacity:1,
   
   });
});
   