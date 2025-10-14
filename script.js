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

    document.addEventListener('DOMContentLoaded', () => {
        const offers = document.querySelectorAll('.offers');
        const selectedOffer = document.querySelector('.selected_offer');

        offers.forEach(offer => {
            offer.addEventListener('mouseenter', () => {
                selectedOffer.classList.add('deselected-by-hover');
                offer.classList.add('selected_offer');
            });
            offer.addEventListener('mouseleave', () => {
                selectedOffer.classList.remove('deselected-by-hover');
                offer.classList.remove('selected_offer');
            });
        });
    });

    