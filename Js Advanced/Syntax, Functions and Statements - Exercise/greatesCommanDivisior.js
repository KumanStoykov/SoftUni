function solve(a, b) {
    if(b === 0) {
        return a;
    }
    return solve(b, a % b)
}

solve(2154, 458);