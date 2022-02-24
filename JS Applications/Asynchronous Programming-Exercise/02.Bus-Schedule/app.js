function solve() {
        
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive'); 
    const infoField = document.querySelector('#info span');

    let data = {
        next: 'depot'
    };
    
    async function depart() {

        const url = `http://localhost:3030/jsonstore/bus/schedule/${data.next}`;

        try {
            departBtn.disabled = true;
            
            const response = await fetch(url);
            if(response.status != 200) {
                throw new Error('Error');
            }
            data = await response.json();
            
            arriveBtn.disabled = false;
            infoField.textContent = `Next stop ${data.name}`;

        } catch(error) {
            departBtn.disable = true;
            arriveBtn.disable = true;
            alert(error.message);
        }        
    }          

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoField.textContent = `Arriving at ${data.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();