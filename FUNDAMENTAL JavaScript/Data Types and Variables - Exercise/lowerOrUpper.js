function lowerOrUpper(str) {

    let askii = str.charCodeAt();

    if (askii > 64 && askii < 91) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }

}

lowerOrUpper('l');