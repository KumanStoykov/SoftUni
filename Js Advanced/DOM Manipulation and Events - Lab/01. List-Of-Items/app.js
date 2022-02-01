function addItem() {
  const creatElement = document.createElement("li");
  const itemsList = document.querySelector("#items");
  let input = document.querySelector("#newItemText").value;

  if (input.length > 0) {
    itemsList.appendChild(creatElement).textContent = input;
  }

  document.querySelector("#newItemText").value = "";
}
