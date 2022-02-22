const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power3.easeOut" },
  });

  tl.fromTo(
    ".hero-img",
    { scale: 1.3, borderRadius: "12rem" },
    {
      scale: 1,
      borderRadius: "12rem",
      delay: 0.15,
      duration: 2.5,
      ease: "elastic.out(1.5,1)",
    }
  );

  tl.fromTo('.cta1', {x:"100%", opacity:0.5}, {x:0, opacity:1}, "<20%");
  tl.fromTo('.cta3', {x:"-100%", opacity:0.5}, {x:0, opacity:1}, "<20%")
  tl.fromTo('.cta2', {y:"100%", opacity:0.5}, {y:0, opacity:1}, "<20%")
  tl.fromTo('.cta4', {x:"100%", opacity:0.5}, {x:0, opacity:1}, "<20%");
  tl.fromTo('.cta6', {x:"-100%", opacity:0.5}, {x:0, opacity:1}, "<20%")
  tl.fromTo('.cta5', {y:"100%", opacity:0.5}, {y:0, opacity:1}, "<20%")
  tl.fromTo('.cta-btn',{y:20, opacity:0},{y:0, opacity:1}, "<")

  //split text alt

  const logo = document.querySelector(".logo");
  const letters = logo.textContent.split("");

  logo.textContent = "";

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + "</span>";
    
});

gsap.set('.letter', {display: "inline-block"});
gsap.fromTo('.letter', { y:'100%'}, {y: 0, delay:0.3, stagger: 0.05});