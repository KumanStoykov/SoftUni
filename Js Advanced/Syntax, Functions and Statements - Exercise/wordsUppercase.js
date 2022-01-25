function wordsUppercase(str) {

    return str.toUpperCase()
        .split(/[\W]+/)
        .filter(el => el.length > 0)
        .join(', ');
}
console.log(
    wordsUppercase("Functions in JS can be nested, i.e. hold other functions")
);
