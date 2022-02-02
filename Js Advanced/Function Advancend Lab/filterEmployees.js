function filterEmployees(data, criteria) {

    let [key, value] = criteria.split('-');
    let parse = JSON.parse(data);
    let counter = 0;

     parse.map(employees => toPrint.call(employees));


    function toPrint() {

        if (this[key] === value || criteria === 'all') {
            return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);
        }
    }
}


console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
));