function commonElements(firstStr, secondStr) {

    for(let i = 0; i < firstStr.length; i++) {
        let elFirst = firstStr[i];
        
        for (let index = 0; index < secondStr.length; index++) {
                let elSecond = secondStr[index];

                if(elFirst === elSecond) {
                    console.log(elSecond);
                }
            
        }


    }


}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);