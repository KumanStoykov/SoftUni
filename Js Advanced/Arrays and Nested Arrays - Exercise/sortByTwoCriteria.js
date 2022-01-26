function sortByTwoCriteria(input) {

    return input.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

sortByTwoCriteria(['alpha', 
'beta', 
'gamma']);