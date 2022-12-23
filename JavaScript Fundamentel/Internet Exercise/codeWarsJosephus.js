function josephus(items, k){
    let  result = []
    let index = 0;
    while (items.length > 0){
      index = (index + k - 1) % items.length;
     result = result.concat(items.splice(index, 1));
    }
    return result;
  }




console.log(josephus([1,2, 3, 4, 5, 6, 7], 3));