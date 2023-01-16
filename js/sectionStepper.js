const sections = document.querySelectorAll(".section");
const anchorsCont = document.querySelector(".section-stepper");
const anchors = anchorsCont.querySelectorAll(".section-stepper-item");

window.addEventListener('scroll', () => {
  let sectionId = '';
  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].getBoundingClientRect().top < 50) {
      sectionId = sections[i].id;
      break;
    }
  }
  anchors.forEach(el => {
    el.classList.remove('active');
  });
  if (sectionId) {
    anchorsCont.querySelector(`a[href$="#${sectionId}"]`).classList.add('active');
  }
});

anchors.forEach((anchor, index) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});