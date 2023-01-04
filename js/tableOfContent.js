const articleBody = document.querySelector(".article-b");
const headersList = articleBody.querySelectorAll("h2, h3, h4, h5, h6");
const tableContentsCont = document.querySelector(".tc");
const tableContentsList = tableContentsCont.querySelectorAll(".tc-item");

window.addEventListener('scroll', () => {
  let headerId = '';
  for (let i = headersList.length - 1; i >= 0; i--) {
    if (headersList[i].getBoundingClientRect().top < 50) {
      headerId = headersList[i].id;
      break;
    }
  }
  tableContentsList.forEach(el => {
    el.classList.remove('active');
  });
  if (headerId) {
    tableContentsCont.querySelector(`a[href$="#${headerId}"]`).classList.add('active');
  }
});

tableContentsList.forEach((link, index) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    headersList[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});