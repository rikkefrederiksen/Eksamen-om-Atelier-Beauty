//SVG START//

function handler(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("transition");
      } else {
        entry.target.classList.remove("transition");
      }
    }
  }
  
  const observer = new IntersectionObserver(handler, {
    threshold: 1.0,
  });
  
  observer.observe(document.querySelector("svg"))
  
  //SVG SLUT//

