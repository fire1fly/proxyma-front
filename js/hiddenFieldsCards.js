const fieldList = document.querySelectorAll("._hidden-field");

function handleSelectValue(value, field) {
  if (value !== "null") {
    field.classList.remove("_hidden-field");
  }
}

fieldList.forEach(field => {
  if (field.classList.contains("dd")) {
    const input = field.querySelector(".dd-input");
    input.addEventListener("change", e => {
      handleSelectValue(e.target.value, field);
    });
  }
});

const hiddenFieldsMediaQuery = window.matchMedia("(max-width: 991px)");


function handleHiddenFields(e) {
  if (e.matches) {
    fieldList.forEach(field => {
      field.classList.remove("_hidden-field");
    });
  } else {
    fieldList.forEach(field => {
      field.classList.add("_hidden-field");
    });
  }
}

hiddenFieldsMediaQuery.addListener(handleHiddenFields);
handleHiddenFields(hiddenFieldsMediaQuery);