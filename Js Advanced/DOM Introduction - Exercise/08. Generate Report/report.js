function generateReport() {
    const checkBoxes = document.querySelectorAll("[type = checkbox]");
    const tableRowL = document.querySelectorAll("tbody tr").length;
    const table = document.querySelector("table");

    let output = [];

    let indexOfClicks = Array.from(checkBoxes).map((el, i) =>
        el.checked == true ? i : undefined
    );

    for (let row = 1; row <= tableRowL; row++) {
        let obj = {};

        for (let cell = 0; cell < table.rows[row].cells.length; cell++) {
            const currentColum = table.rows[0].cells[cell].innerText
                .trim()
                .toLowerCase();

            let columProperty = table.rows[row].cells[cell].innerText.trim();

            if (indexOfClicks[cell] != undefined) {
                obj[currentColum] = columProperty;
            }
        }

        output.push(obj);
    }

    document.querySelector("#output").value = JSON.stringify(output);
}
