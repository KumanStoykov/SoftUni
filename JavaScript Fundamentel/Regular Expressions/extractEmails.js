function extractEmails(input) {

    let pattern = /[^\.\-]\b[a-zA-Z\d]+[\-\._]?[A-Za-z\d]*?@[A-Za-z\-?]+\.[A-Za-z\-?]+\.?[A-Za-z?]+\b/g;
    
    let match = input.match(pattern);
   
    if(match) {
        match.forEach(email => {  
            console.log(email);     
        });
    }
}


extractEmails('Just send email to s.miller@mit.edu and .j.hopking@york.ac.uk for more information.');