function editElement(ref, match, replacer) {

    let regex = new RegExp(match, 'g');
    ref.textContent = ref.textContent.replace(regex, replacer);
       
}