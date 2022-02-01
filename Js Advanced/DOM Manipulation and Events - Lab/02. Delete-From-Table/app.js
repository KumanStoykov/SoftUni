function deleteByEmail() {
  let getAllPersons = document.querySelectorAll("tr");
  let getElementResult = document.querySelector("#result");
  let input = document.querySelector('input[name="email"]');
  let isDeleted = false;

  for (let person of getAllPersons) { 
    if (person.textContent.includes(input.value)) {
      person.remove();
      getElementResult.textContent = "Deleted.";
      isDeleted = true;
    }
  }
  if (!isDeleted) {
    getElementResult.textContent = "Not found.";
  }
  input.value = "";
}
