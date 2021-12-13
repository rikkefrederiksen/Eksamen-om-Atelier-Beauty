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

  // Video transition
function videoHandler(entries) {
  for (const entry of entries){
      if (entry.isIntersecting){
          entry.target.play();
      } else{
          entry.target.pause();
      }      
  }
}

const videoObserver = new IntersectionObserver(videoHandler, {threshold: 0.3,
})
const video1 = document.getElementById("video")
videoObserver.observe(video1);



