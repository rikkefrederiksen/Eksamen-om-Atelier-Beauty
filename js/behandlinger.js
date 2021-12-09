//BILLEDER START//

function handler(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation");
      } else {
        entry.target.classList.remove("animation");
      }
    }
  }
  
  const observer = new IntersectionObserver(handler, {
    threshold: 0.1,
  });

  observer.observe(document.querySelector(".tilt-in-right-1"))
  observer.observe(document.querySelector(".tilt-in-right-2"))
  
  //BILLEDER SLUT//