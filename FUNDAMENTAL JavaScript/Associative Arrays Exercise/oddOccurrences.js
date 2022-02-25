function oddOccurrences(str) {

    let myMap = new Map();

    str.split(' ')
        .forEach(element => {
            element = element.toLowerCase()
            if (!myMap.has(element)) {
                myMap.set(element, 0);

            }
            myMap.set(element, myMap.get(element) + 1);

        });

     return Array.from(myMap.keys())
    .filter(x => myMap.get(x) % 2 !== 0)
    .join(' ');
        

}
console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));