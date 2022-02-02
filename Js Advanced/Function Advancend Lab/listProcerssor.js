function listProcessor(inputArr) {

    let innerCollection = [];
    
    
    let engine = {
        add(string) {
          innerCollection.push(string);             
        },
        remove(string) {
           innerCollection = innerCollection.filter(word => word != string);
        },
        print() {
            console.log(innerCollection.join(','));
        },
    }
    
    
    inputArr.forEach(info => {
        let [command, word] = info.split(' ');
        
       engine[command](word);
    });
 
}

console.log(listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']));