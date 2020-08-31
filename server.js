const fs = require("fs");
const cors = require('cors')
const express = require("express");
const util = require('util');


// Настройка заголовков
let corsOptions = {
  origin: 'http://localhost:8080',
  contentType: 'application/json'
}
// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);

function getStuff() {
  return readFile('MOCK_DATA.json', 'utf8');
}

const app = express();

app.get("/", cors(corsOptions), function(request, response){
  let page
  if (request.query.page) {
    page = request.query.page
  } else
    page = 1

  getStuff().then(data => {
    data = JSON.parse(data)
    let sendContacts = []
    for (let i=((+page-1)*12); i < data.length; i++) {
      sendContacts.push({
        "id":data[i]["id"],
        "first_name":data[i]["first_name"],
        "last_name":data[i]["last_name"],
        "image":data[i]["image"]
    })
      if (sendContacts.length == 12) {
        break
      }
    }
    if (sendContacts.length != 0) {
      response.send(sendContacts)
    } else {
      response.sendStatus(404)
    }
    })
    .catch(e => {
      response.send(e)
    })  
});

app.get('/:id', cors(corsOptions), function(request, response) {
  getStuff().then(data => {
    data = JSON.parse(data) 
    return Promise.resolve(data.filter(element => element["id"]["$oid"] === request.params["id"])[0])  
    }).then(person => {
      response.send(JSON.stringify(person))
    }).catch(e => {
      console.log(e)
    })
  })



app.listen(3000, () => {
  console.log("Server has been started...")
});