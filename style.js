
   
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp:0.07
});



let circlemouse=(xscale,yscale)=>{
    let cir;
    window.addEventListener("mousemove",(dets)=>{
        console.log(dets.clientX,dets.clientY);
         cir=document.querySelector(".minicircle");
        cir.style.transform=`translate(${dets.clientX}px , ${dets.clientY}px)  scale(${xscale},${yscale})  `;
        cir.style.opacity=1;
        
    });
    window.addEventListener("mouseleave",(dets)=>{
        cir.style.transform=`translate(${dets.clientX}px , ${dets.clientY}px)  scale(${xscale},${yscale})  `;
        cir.style.opacity=0;
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



 document.querySelectorAll(".elem1").forEach((elem1)=>{
    var diff=0;
    var rotate=0;
    var difro;

    
    
    elem1.addEventListener("mousemove",(dets)=>{
    diff = dets.clientY-elem1.getBoundingClientRect().top;
     rotate = 0;
     difro= dets.clientX-rotate;
    rotate=dets.clientX;


    gsap.to(elem1.querySelectorAll("img"),{
        opacity:1,
        top:diff,
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,difro)
    });
    });

    elem1.addEventListener("mouseleave",(dets)=>{
        gsap.to(elem1.querySelector("img"),{opacity:0});
    })
});











   