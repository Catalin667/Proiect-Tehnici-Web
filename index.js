const express = require("express");
const app = express();
const port = 3000; 
const cors = require("cors")
const fs = require("fs");
const uuid = require("uuid");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get("/studenti", (req, res) => {
    res.send(readJSONFile());
});
 
app.post("/studenti", (req, res) => {
    const studenti = readJSONFile();
    var student = req.body;
    studenti.push(student);
    writeJSONFile(studenti);
    res.send(student);
});

app.put("/", (req, res) =>{
    var id = req.query.id;
    console.log(id)
    var studenti = readJSONFile();
    for(let i = 0; i < studenti.length; i++) {
        if(studenti[i].id === id) {
            req.body.id = id;
            console.log(studenti[i]);
            studenti[i] = req.body;
        }
    }
    writeJSONFile(studenti);
    res.send(studenti);
})

app.delete("/",(req,res) =>{
    var id = req.query.id;
    var studenti = readJSONFile();
    var newStudenti = [];
    for(let i = 0; i < studenti.length; i++) {
        if(studenti[i].id !== id) {
            newStudenti.push(studenti[i])
        }
    }
    writeJSONFile(newStudenti);
    res.send(newStudenti);
})
app.listen(port, () => {
    console.log(port);
});
// Functia de citire din fisierul form.json
function readJSONFile() {
    return JSON.parse(fs.readFileSync("form.json"))["studenti"];
}

// Functia de scriere in fisierul form.json
function writeJSONFile(content) {
fs.writeFileSync(
    "form.json",
    JSON.stringify({ studenti: content }),
    "utf8",
    err => {
    if (err) {
        console.log(err);
    }
    }
);
}
 