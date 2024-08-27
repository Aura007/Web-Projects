const counters = document.querySelectorAll(".counter");
const animationSpeed = 1000; // Total duration of the animation in milliseconds

const updateCounter = (counter) => {
  const targetCount = +counter.getAttribute("data-target");
  const numberElement = counter.querySelector('.number');
  const startCount = 0;
  const increment = targetCount / animationSpeed;

  let currentCount = startCount;

  const animate = () => {
    if (currentCount < targetCount) {
      currentCount += increment;
      numberElement.innerText = Math.ceil(currentCount);
      requestAnimationFrame(animate);
    } else {
      numberElement.innerText = targetCount;
    }
  };

  animate();
};

counters.forEach((counter) => {
  updateCounter(counter);
});

