function table(input) {
    input = JSON.parse(input);
    let htmlFile = '<table>\n';
    let counter = 0;

    for (const line of input) {
        let grade = line.Grade;
        let name = line.Name;
        let score = line.Score;
        counter++;

        if(grade === undefined) {
            if(counter === 1) {
                htmlFile += '   <tr><th>Name</th><th>Score</th></tr>\n';
            }
            htmlFile += `   <tr><td>${escapeHtml(name)}</td><td>${escapeHtml(score)}</td></tr>\n`;

        } else if (grade !== undefined){
            if(counter === 1) {
                htmlFile += '   <tr><th>Name</th><th>Score</th><th>Grade</th></tr>\n';
            }
            htmlFile += `   <tr><td>${escapeHtml(name)}</td><td>${escapeHtml(score)}</td><td>${escapeHtml(grade)}</td></tr>\n`;
        }

        
    }

    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        str = str.toString();
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }

    htmlFile += '</table>';
    return htmlFile;
}

console.log(table(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`

));