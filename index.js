const imageSliderContainers = document.querySelectorAll(
  ".image-slider-container"
);
const cardBodyContainers = document.querySelectorAll(".card-body-container");

imageSliderContainers.forEach((container, index) => {
  container.addEventListener("touchstart", (e) => {
    let targetTouch = e.targetTouches[0].clientX;
    console.log(targetTouch);
    if (targetTouch > 258) {
      cardBodyContainers[index].style.flexDirection = "column";
    } else {
      console.log("false");
    }
  });
});
