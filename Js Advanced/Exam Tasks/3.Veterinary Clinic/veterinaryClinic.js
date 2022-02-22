class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        const client = this.clients.find(c => c.ownerName == ownerName);
        const currentPet = client == undefined ? undefined : client.pets.find(p => p.petName == petName);

        if (this.currentWorkload == this.capacity) {
            throw new Error(`Sorry, we are not able to accept more patients!`);
        }
        if (currentPet && currentPet.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
        }
        if (currentPet && currentPet.procedures.length == 0) {
            procedures.forEach(x => currentPet.procedures.push(x));
            this.currentWorkload++;
            return `Welcome ${petName}!`;
        }
        const petDate = {
            petName,
            kind,
            procedures,
        }
        if (client === undefined) {
            this.clients.push({ ownerName, pets: [petDate] });
        } else {
            client.pets.push(petDate);
        }
        this.currentWorkload++;
        return `Welcome ${petName}!`;
    }
    onLeaving(ownerName, petName) {
        const client = this.clients.find(c => c.ownerName == ownerName);
        const currentPet = client == undefined ? undefined : client.pets.find(p => p.petName == petName);

        if (client === undefined) {
            throw new Error("Sorry, there is no such client!");
        }
        if (currentPet === undefined || currentPet.procedures.length == 0) {
            throw new Error`Sorry, there are no procedures for ${petName}!`;
        }
        this.currentWorkload--;
        this.totalProfit += currentPet.procedures.length * 500;
        currentPet.procedures.length = 0;
        return `Goodbye ${petName}. Stay safe!`;
    }
    toString() {
        const busy = Math.floor((this.currentWorkload / this.capacity) * 100);
        const output = [`${this.clinicName} is ${busy}% busy today!`, `Total profit: ${this.totalProfit.toFixed(2)}$`];
        const sortedOfOwners = this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

        sortedOfOwners.map(owner => {
            output.push(`${owner.ownerName} with:`);
            owner.pets.sort((a, b) => a.petName.localeCompare(b.petName))
                .forEach(p => output.push(`---${p.petName} - a ${p.kind.toLowerCase()} that needs: ${p.procedures.join(', ')}`));
        });
        return output.join('\n');
    }
}
let clinic = new VeterinaryClinic('SoftCare', 10);

console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Huck', 'Tinya', 'Cat', ['A154B']));
console.log(clinic.newCustomer('Jim Jones', 'Tinya', 'Cat', ['A154B']));
console.log(clinic.newCustomer('Jim Jones', 'Tinyaa', 'Cat', []));
console.log(clinic.onLeaving('Jim Huck', 'Tinya'));
console.log(clinic.newCustomer('Jim Huck', 'Tinya', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tinya'));
console.log(clinic.newCustomer('Jim Jones', 'Tinyasasdas', 'Cat', ['A154B']));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());

