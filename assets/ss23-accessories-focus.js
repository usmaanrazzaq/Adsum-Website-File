console.log("helloworld")
var tl = gsap.timeline();

tl.from(".fullAnnotations1", {duration: 1, opacity: 0, y: 50, repeat: 3});
tl.from(".fullAnnotations2", {duration: 1, opacity: 0, y: 50, repeat: 1});
