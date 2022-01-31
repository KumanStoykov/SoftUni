function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      const textAreaInput = JSON.parse(document.querySelector('#inputs textarea').value);
      const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      const workersOutput = document.querySelector('#workers p');

      let restaurants = {};
      let bestRestaurant = { name: '', avrSalary: 0, bestSalary: 0 };

      // Insert input in object.
      makeInOject(textAreaInput);

      // Find best restaurant.
      findBestRestaurant(restaurants);


      bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${(bestRestaurant.avrSalary).toFixed(2)} Best Salary: ${(bestRestaurant.bestSalary).toFixed(2)}`;
      let workers = restaurants[bestRestaurant.name]
         .sort((a, b) => b.salary - a.salary)
         .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`);

      workersOutput.textContent = workers.join(' ');
   }

   function makeInOject(input) {
      for (let line of input) {
         let [restaurantName, workers] = line.split(' - ');


         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = [];
         }
         if (restaurants.hasOwnProperty(restaurantName)) {

            workers.split(', ').forEach(worker => {
               let [name, salary] = worker.split(' ');
               salary = Number(salary);

               let employee = { name, salary };
               restaurants[restaurantName].push(employee);

            });

         }
      }
   }
   function findBestRestaurant(input) {
      let restaurants = input;
      for (const key in restaurants) {
         let avr = 0;
         let currentBestSalary = 0;
         let workerL = restaurants[key].length;

         restaurants[key].forEach(worker => {
            avr += worker.salary;
            currentBestSalary = worker.salary > currentBestSalary ? worker.salary : currentBestSalary;
         });
         avr = avr / workerL;
         if (bestRestaurant.avrSalary < avr) {
            bestRestaurant.name = key;
            bestRestaurant.avrSalary = avr;
            bestRestaurant.bestSalary = currentBestSalary;
         }

      }
   }
}