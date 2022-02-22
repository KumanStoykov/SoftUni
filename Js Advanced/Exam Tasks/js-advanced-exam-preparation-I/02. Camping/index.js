class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfParticipants = [];
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        let participant = { 
            name,
            condition,
            power: 100,
            wins: 0,
        };

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        // Using mutator
        // let indexOfParticipant = this.listOfParticipants.findIndex(x => x.name == name);

        // if (indexOfParticipant == -1) {
        //     throw new Error(`The ${name} is not registered in the camp.`);
        // }

        // this.listOfParticipants.splice(indexOfParticipant, 1);

        // Using non-mutator 
        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);

        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name == participant1);
        
        if (!player1) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'Battleship') {
            player1.power += 20;

            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame == 'WaterBalloonFights') {
            let nameOfWinner = '';
            let player2 = this.listOfParticipants.find(x => x.name == participant2);

            if (!player2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (player1.power > player2.power) {
                player1.wins++;
                nameOfWinner = player1.name;
            } else if (player2.power > player1.power) {
                player2.wins++;
                nameOfWinner = player2.name;
            } else {
                return `There is no winner.`;
            }

            return `The ${nameOfWinner} is winner in the game ${typeOfGame}.`
        }

    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
            })

        return result.join('\n');
    }
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
