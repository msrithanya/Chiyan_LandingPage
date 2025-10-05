document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 80; // smaller = faster

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCount();
    });
  });


////////////////////////////////////
////////////////////////////////////
let models=document.querySelector('.outer_wrapper');
models.addEventListener('wheel',(evnt)=>{
  evnt.preventDefault();
  models.scrollLeft+=evnt.deltaY
});

