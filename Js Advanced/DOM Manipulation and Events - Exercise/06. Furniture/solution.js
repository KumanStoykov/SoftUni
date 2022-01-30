function solve() {
  let textareaInput = document.querySelectorAll("textarea")[0];
  let textareaOutput = document.querySelectorAll("textarea")[1];

  let generateBtn = document.querySelectorAll("button")[0];
  let buyBtn = document.querySelectorAll("button")[1];

  generateBtn.addEventListener("click", clickGenerate);

  function clickGenerate() {
    let input = JSON.parse(textareaInput.value);

    for (let product of input) {
      // Create tr tag
      let createElementTableRow = document.createElement("tr");
      //All td elements
      let imgTd = document.createElement("td");
      let nameTd = document.createElement("td");
      let priceTd = document.createElement("td");
      let decFactorTd = document.createElement("td");
      let checkboxTd = document.createElement("td");
      //Img tag
      let createImgTag = document.createElement("img");
      //All paragraph
      let namePara = document.createElement("p");
      let pricePara = document.createElement("p");
      let decFactorPara = document.createElement("p");
      let checkbox = document.createElement("input");

      //append img tag
      createImgTag.src = product.img;
      imgTd.appendChild(createImgTag);
      createElementTableRow.appendChild(imgTd);
      //append paragraph tags
      //Product name
      namePara.textContent = product.name;
      nameTd.appendChild(namePara);
      createElementTableRow.appendChild(nameTd);
      // Product price
      pricePara.textContent = product.price;
      priceTd.appendChild(pricePara);
      createElementTableRow.appendChild(priceTd);
      // Product Decoration factor
      decFactorPara.textContent = product.decFactor;
      decFactorTd.appendChild(decFactorPara);
      createElementTableRow.appendChild(decFactorTd);
      // Added checkbox
      checkbox.type = "checkbox";
      checkboxTd.appendChild(checkbox);
      createElementTableRow.appendChild(checkboxTd);

      //Add table row to table body
      document.querySelector(".table tbody").appendChild(createElementTableRow);
    }
  }

  buyBtn.addEventListener("click", clickBay);

  function clickBay() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let tableRow = document.querySelectorAll("tbody tr");

    let products = [];
    let totalPrice = 0;
    let averageDecoration = 0;
    let counterItems = 0;

    for (let i = 0; i < tableRow.length; i++) {
      let nameOfProduct = tableRow[i].children[1].textContent.trim();
      let price = tableRow[i].children[2].textContent.trim();
      let decoration = tableRow[i].children[3].textContent.trim();

      if (checkboxes[i].checked === true) {
        products.push(nameOfProduct);
        totalPrice += Number(price);
        averageDecoration += Number(decoration);
        counterItems++;
      }
    }
    averageDecoration /= counterItems;

    textareaOutput.value = `Bought furniture: ${products.join(", ")}\n`;
    textareaOutput.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textareaOutput.value += `Average decoration factor: ${averageDecoration}`;
  }
}
