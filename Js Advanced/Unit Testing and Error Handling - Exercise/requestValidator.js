function requestValidator(httpObj) {
  testMethod(httpObj);
  testUri(httpObj);
  testVersion(httpObj);
  testMessage(httpObj);
  return httpObj;

  function testMethod(httpObj) {
    const methods = ["GET", "POST", "DELETE", "CONNECT"];
    const propName = "method";

    if (
      httpObj[propName] === undefined ||
      !methods.includes(httpObj[propName])
    ) {
      throw new Error("Invalid request header: Invalid Method");
    }
  }
  function testUri(httpObj) {
    const propName = "uri";
    const pattern = /^(\*|[A-Za-z0-9\.]+)$/;
    if (!pattern.test(httpObj[propName]) || httpObj[propName] === undefined) {
      throw new Error("Invalid request header: Invalid URI");
    }
  }
  function testVersion(httpObj) {
    const propName = "version";
    const versionMethods = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    if (
      httpObj[propName] === undefined ||
      !versionMethods.includes(httpObj[propName])
    ) {
      throw new Error("Invalid request header: Invalid Version");
    }
  }
  function testMessage(httpObj) {
    const propName = "message";
    const pattern = /^[^<>\\&'"]*$/;
    if (!pattern.test(httpObj[propName]) || httpObj[propName] === undefined) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
}

console.log(requestValidator(  {
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}

  ))