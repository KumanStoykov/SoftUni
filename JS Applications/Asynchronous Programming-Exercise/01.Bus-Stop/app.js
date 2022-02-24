function getInfo() {
    const stopIdInput = document.getElementById('stopId').value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdInput}`;

    // Show not result when input is empty
    if(!stopIdInput) {
        document.getElementById('stopName').textContent = 'Not Result';
        document.getElementById('buses').replaceChildren();
        return;
    }

    fetch(url)
    .then(res => {
        if(res.status != 200) {
            throw new Error('Error');
        }
        return res.json();
    })
    .then(handleResponse)
    .catch(handleError);
    document.getElementById('stopId').value = '';

    function handleResponse(data) {
        const buses = document.getElementById('buses');
        const stopName = document.getElementById('stopName');
        buses.replaceChildren();
        stopName.textContent = data.name;
        
        Object.entries(data.buses).forEach(bus => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            buses.appendChild(li);
        });
    }
    function handleError(error) {
        const ulElement = document.getElementById('buses');
        ulElement.replaceChildren();
        const resultToPrint = document.getElementById('stopName');
        resultToPrint.textContent = error.message;
    }  
}