class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        const participants = this.listOfParticipants.find(p => p.name == name);
        if (!this.priceForCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (participants) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {
        const participants = this.listOfParticipants.find(p => p.name == name);

        if (!participants) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(this.listOfParticipants.findIndex(p => p.name == name), 1);
        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        const par1 = this.listOfParticipants.find(p => p.name == participant1);
        const par2 = this.listOfParticipants.find(p => p.name == participant2);

        if (typeOfGame == 'WaterBalloonFights') {
            if (!(par1) || !(par2)) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (par1.condition != par2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (par1.power > par2.power) {
                par1.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (par1.power < par2.power) {
                par2.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        } else {
            if (!par1) {
                throw new Error(`Invalid entered name/s.`);
            }
            par1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }
    toString() {
        const output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .forEach(p => output.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
            return output.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarsona", "Dimitur Kostov"));

console.log(summerCamp.toString());

