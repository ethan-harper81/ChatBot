const http = require("http-request")

http.get('http://localhost:3000/input', function (err, res) {
    if (err) {
        console.log("Oop");
        console.error(err);
        return;
    }
    console.log("Here");
    console.log(res.code, res.headers, res.buffer.toString());
});

