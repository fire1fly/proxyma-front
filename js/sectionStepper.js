const sections = document.querySelectorAll(".section");
const anchors = document.querySelectorAll(".section-stepper-item");

let threshold = document.documentElement.clientWidth > 991 ? 0.5 : 0;

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    let index = parseInt(entry.target.dataset.sectionIndex);
    if (entry.isIntersecting) {
      anchors[index - 1].classList.add("active");
    } else {
      anchors[index - 1].classList.remove("active");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: threshold
});

sections.forEach(element => {
  observer.observe(element);
});

anchors.forEach((anchor, index) => {
  anchor.addEventListener('click', function (e) {

    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})