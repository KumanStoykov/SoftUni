
class RequestHttp {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: string | undefined;
    public fulfilled: boolean | false;

    constructor(method: string,
        uri: string,
        version: string,
        message: string,
        response=undefined,
        fulfilled=false) {

        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;

    }
}

let myData = new RequestHttp('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);