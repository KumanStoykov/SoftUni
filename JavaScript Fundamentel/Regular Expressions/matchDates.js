function matchDates(input) {
    
    let patterns = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let matches = patterns.exec(input);
    
    

        while(matches !== null) {
            let {day, month, year} = matches.groups;
            console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
            matches = patterns.exec(input);
        }

    


}

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");