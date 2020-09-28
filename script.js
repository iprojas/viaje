// EXACTLY 100 ELEMENTS..!
const detailsElements = document.getElementsByTagName("details");
console.log(detailsElements.length);

function startAgain() {
  Array.from(detailsElements).forEach((element) => {
    element.removeAttribute("open");
  });
}