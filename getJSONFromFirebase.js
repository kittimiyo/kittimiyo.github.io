const readline = require('readline');
const fs = require('fs');
const Promise = require('promise');
const http = require('http');

// set up firebase
const firebase  = require('firebase');

let isAnonymous = true;
let uid = false;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBCBrH4Bz2HwZ90OleRNz_PD0kY7J8pI-s",
  authDomain: "sylvie-wedding-site.firebaseapp.com",
  databaseURL: "https://sylvie-wedding-site.firebaseio.com",
  storageBucket: "sylvie-wedding-site.appspot.com",
  messagingSenderId: "1056019502803"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.auth().signInAnonymously().catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
});

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    isAnonymous = user.isAnonymous;
    uid = user.uid;
  } else {
    // User is signed out.
  }
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = './initialRSVPInfo.json';

function writeJSONToFile(json) {
  const file = fs.createWriteStream(filePath);
  file.write(JSON.stringify(json));
}

function getFirebaseJSON() {
  const rootRef = firebaseApp.database().ref();
  rootRef.once('value').then((snapshot) => {
    const result = snapshot.val();
    if(result) {
      console.log('in getFirebaseJSON, found!');
    } else {
      console.log('not found:\n', snapshot);
      process.exit(1);
    }
  });
}

function putDataInSpreadsheet() {
  const options = {
    host: 'https://sheets.googleapis.com',
    port: 80,
    path: '/v4/spreadsheets/1y1QpODvb-54wJFsTxRYrLoDfLiY2GFq7o82OKa_UbNo/values/Sheet1!B1?valueInputOption=USER_ENTERED',
    method: 'PUT',
    body: {
      "range": "Sheet1!A1:D5",
      "majorDimension": "ROWS",
      "values": [
        ["Item", "Cost", "Stocked", "Ship Date"],
        ["Wheel", "$20.50", "4", "3/1/2016"],
        ["Door", "$15", "2", "3/15/2016"],
        ["Engine", "$100", "1", "30/20/2016"],
        ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
      ]
    }
  };

  const req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      process.exit(0);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
    process.exit(1);
  });

  // write data to request body
  req.write('data\n');
  req.write('data\n');
  req.end();
}

console.log('/ --------- running get data from Firebase --------- /');
//getFirebaseJSON();
putDataInSpreadsheet();