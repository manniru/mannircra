import express from 'express'
const app = express()

import generateData from './data-generator'


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    console.log(+new Date())
    const data = generateData({ serializeDate: true });

    // console.log(data.courses)
    
  // res.send('hello world '+ +new Date())
  var tm = + new Date();
  // res.send(JSON.stringify({ timestamp: tm }));
  res.send(JSON.stringify(data.applicants));
})

app.listen(3001, () => console.log('Mannir Server app listening on port 3001!'))
