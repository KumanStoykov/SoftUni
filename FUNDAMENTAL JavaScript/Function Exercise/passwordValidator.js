function passwordValidator(pass) {


    function passLength(str) {

        if (str.length >= 6 && str.length <= 10) {
            return '';
        } else {
            return "Password must be between 6 and 10 characters\n";
        }
    }

    function passLettersAndDigits(str) {
        let isLeterrDigits = true;
        for (const char of str) {
            let code = char.charCodeAt();

            if (code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122) {
                isLeterrDigits = false;
            }



        }
        return isLeterrDigits ? '' : "Password must consist only of letters and digits\n";

    }

    function Digits(str) {
        let counter = 0;

        for (const char of str) {
            let code = char.charCodeAt();

            if (code >= 48 && code <= 57) {
                counter++;
            }
        }

        if (counter >= 2) {
            return '';
        } else {
            return "Password must have at least 2 digits ";
        }

    }
    let result = passLength(pass) + passLettersAndDigits(pass) + Digits(pass)

    return result ? result : "Password is valid"



}

let result = passwordValidator('Pa$s$s')

console.log(passwordValidator('Pa$s$s'))