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

    document.addEventListener('DOMContentLoaded', () => {
        const offers = document.querySelectorAll('.offers');
        const selectedOffer = document.querySelector('.selected_offer');

        offers.forEach(offer => {
            // When mouse enters an unselected offer
            offer.addEventListener('mouseenter', () => {
                // Apply the shrunken, deselected style to the currently selected card
                selectedOffer.classList.add('deselected-by-hover');
                
                // OPTIONAL: Add 'selected_offer' class to the hovered element
                // to make sure it gets all the specific features.
                offer.classList.add('selected_offer');
            });

            // When mouse leaves an unselected offer
            offer.addEventListener('mouseleave', () => {
                // Remove the shrunken style, allowing the selected card to return to default
                selectedOffer.classList.remove('deselected-by-hover');

                // OPTIONAL: Remove 'selected_offer' class from the hovered element
                offer.classList.remove('selected_offer');
            });
        });
    });

    