// Defining variables
const typeDrop = document.querySelector("#dropType");
const priceDrop = document.querySelector("#dropPrice");
const dateDrop = document.querySelector("#dropDate");
const filterType = document.querySelectorAll(".filter-type");
const filterDrop = document.querySelectorAll(".filter-drop");

// Filtering
filterType.forEach((filter) => {
  filter.addEventListener("click", () => {
    showFilterMenu(filter);
  });
});

function showFilterMenu(filter) {
  let dropDiv = filter.querySelector(`#drop${filter.id}`);
  dropDiv.classList.add("filter-show");
}

filterDrop.forEach((dropdown) => {
  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("filter-show");
  });
});
