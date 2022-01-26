function addAndRemoveElements(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] === 'add') {
            newArr.push(i + 1);
        } else {
            newArr.pop();
        }
    }
    if(newArr.length > 0) {
        return newArr.join('\n');

    }
    return 'Empty';


}

console.log(addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
));