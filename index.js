var express = require('express');
var cors = require('cors');
require('dotenv').config()
let multer = require('multer');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//using multer to create a file uploader using the post method in express
app.post('/api/fileanalyse', multer().single('upfile'), (req, res) =>{
    let resObject = {}
    resObject['name'] = req.file.originalname;
    resObject['type'] = req.file.mimetype;
    resObject['size'] = req.file.size;

    res.json(resObject);
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
