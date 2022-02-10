(function stringExtension() {

    String.prototype.ensureStart = function (strStart) {

        if (!this.startsWith(strStart)) {
            return strStart + '' + this;
        }
        return this.toString();

    }

    String.prototype.ensureEnd = function (strEnd) {
        if (!this.endsWith(strEnd)) {
            return this + '' + strEnd;
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        return this.length > 0 ? false : true;
    }
    String.prototype.truncate = function (n) {
        const indexOfSpace = this.lastIndexOf(' ');

        if (this.length <= n) {
            return this.toString();
        }
        if(this.length >= n) {
            
        }
        if (indexOfSpace != -1) {
            let splitText = this.split(' ');
            while (splitText.join(' ').length + 3 > n) {
                splitText.pop();
            }
            return splitText.join(' ') + '...';
        }
        if (n < 3) {

            return '.'.repeat(n);
        }
    }
    String.format = function (string, ...params) {
        const regEx = /{[0-9]}/;

        for (let w of params) {
            string = string.toString().replace(regEx, w);
        }

        return string.toString();
    }


})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = str.isEmpty();
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
