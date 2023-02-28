const copyElList = document.querySelectorAll(".copy");

copyElList.forEach(el => {
  const copyValue = el.querySelector(".copy-value");
  const copyTrigger = el.querySelector(".copy-trigger");
  copyTrigger.addEventListener("click", () => {
    const str = copyValue.innerText || copyValue.value;
    const field = document.createElement('textarea');
    field.value = str;
    field.setAttribute('readonly', '');
    field.style.position = 'absolute';
    field.style.left = '-9999px';
    document.body.appendChild(field);
    field.select();
    document.execCommand('copy');
    document.body.removeChild(field);
  });
});