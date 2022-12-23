function winningTicket(input) {

    let pattern = /([\$]{6,10})?([\@]{6,10})?([\^]{6,10})?([\#]{6,10})?/mg;
    input = input.split(/\s*,\s*/);

    for (let str of input) {
        str = str.trim();
        if (str.length !== 20) {
            console.log("invalid ticket");
            continue;
        }
        let strL = (str.length) / 2;
        let left = str.slice(0, strL);
        let right = str.slice(strL, str.length);

        let matchLeft = left.match(pattern).join("");
        let matchRight = right.match(pattern).join("");
        let leftL = matchLeft.length;
        let rightL = matchRight.length;
        let result = leftL > rightL ? rightL : leftL;


        if (matchLeft && matchRight && leftL !== 0) {

            if (result < 10 && result > 5) {
                console.log(`ticket "${str}" - ${result}${matchLeft[0]}`);

            } else if (result === 10) {
                console.log(`ticket "${str}" - ${result}${matchLeft[0]} Jackpot!`);
            }

        } else {
            console.log(`ticket "${str}" - no match`);
        }
    }
}


winningTicket('$$$$$$$$$$$$$$$$$$$$, ^^^^^^Ca^^^^^^^^Cash, aabbldkfjdkskskdkskd ,   @@@@@@@@@@#@@@@@@@@@, as@@@@sxwx@@@@@@@@@@, aaaaaaa#############');