alert("js is working");
Shery.mouseFollower();
Shery.makeMagnet(".magnet"); 
Shery.hoverWithMediaCircle(".hvr",{
    videos:["./video/VN20231230_142747.mp4","./video/VN20231230_142838.mp4" ,"./video/VN20231230_142951.mp4"] });

gsap.to(".fleftelem" ,{
    scrollTrigger:{
        trigger: "#fimages",
        pin: true,
        start:"top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1

});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse: {value:1}},
  slideStyle: (setScroll) =>{
    sections.forEach(function(section ,index){
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function(prog){
               setScroll(prog.progress+index)
            }
        })
    })
  }
     
      });
    
  
    gsap.to(".data" ,{
        scrollTrigger:{
            trigger: "#education",
            pin: true,
            start:"bottom bottom",
            end: "bottom top",
            endTrigger: ".dataImg",
            scrub: 1
        },
        y: "-120%",
        ease: Power1
    
    });


