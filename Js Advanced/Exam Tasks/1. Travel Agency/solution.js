window.addEventListener('load', solution);

function solution() {

  const nameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const postCodeInput = document.getElementById('code');
  const infoPreview = document.getElementById('infoPreview');

  const submitBtn = document.getElementById('submitBTN');

  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  // Add data to the information
  submitBtn.addEventListener('click', addInformation);

  // Continue reservation button
  continueBtn.addEventListener('click', readyReservation);

  function addInformation() {
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const address = addressInput.value;
    const postCode = postCodeInput.value;

    if (name && email) {

      const date = [elementCreate('li', `Full Name: ${name}`),
      elementCreate('li', `Email: ${email}`),
      elementCreate('li', `Phone Number: ${phone}`),
      elementCreate('li', `Address: ${address}`),
      elementCreate('li', `Postal Code: ${postCode}`)];

      date.forEach(el => infoPreview.appendChild(el));
      // Edit and continue button is enabled
      editBtn.disabled = false;
      continueBtn.disabled = false;
      // Submit button is disabled;
      submitBtn.disabled = true;

      // Add handler to edit button and take needed arguments with bind
      editBtn.addEventListener('click', edit.bind(null, name, email, phone, address, postCode));
    }
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    postCodeInput.value = '';

  }
  function edit(name, email, phone, address, postCode) {

    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    addressInput.value = address;
    postCodeInput.value = postCode;

    submitBtn.disabled = false;

    editBtn.disabled = true;
    continueBtn.disabled = true;

    Array.from(infoPreview.querySelectorAll('li')).forEach(el => el.remove());
  }
  function readyReservation() {
    
    const blockDiv = document.querySelector('#block');
    Array.from(blockDiv.childNodes).forEach(el => el.remove());
    blockDiv.appendChild(elementCreate('h3', `Thank you for your reservation!`));
    
  }

  function elementCreate(type, ...content) {
    const element = document.createElement(type);

    for (let item of content) {
      if (typeof item == 'string' || typeof item == 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element
  }
}
