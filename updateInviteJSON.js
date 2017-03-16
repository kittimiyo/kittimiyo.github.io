const readline = require('readline');
const fs = require('fs');
const Promise = require('promise');
const firebase = require('firebase');


// ---------- Firebase setup ------------- //
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


// ------- helper fcns ------ //
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function setJSONInFirebase(code, entry) {
  console.log(`JSON obj for entry ${code}:`, JSON.stringify(entry));
  return new Promise((resolve, reject) => {
    const queryRef = firebaseApp.database().ref(code);
    queryRef.set(entry).then(() => {
      console.log(`entry ${code} saved to database`);
      resolve();
    })
    .catch((e) => {
      reject(e);
    });
  });
}

function getEntryFromFirebase(code) {
  return new Promise((resolve, reject) => {
    const queryRef = firebaseApp.database().ref(code);
    queryRef.once('value').then(function (snapshot) {
      const result = snapshot.val();
      if (result) {
        resolve(result);
        return result;
      } else {
        resolve({ totalPeople: 'notset' })
      }
    })
  });
}

function getJSONFromFirebase() {
  return new Promise((resolve, reject) => {
    const rootRef = firebaseApp.database().ref();
    rootRef.once('value').then(function (snapshot) {
      const result = snapshot.val();
      if (result) {
        resolve(result);
        return result;
      } else {
        console.log('not found:\n', snapshot);
        reject(snapshot);
      }
    })
  });
}

// useful for debugging
function log(entry) {
  console.log('current:', JSON.stringify(entry));
}


// -------- build entry ----- //
function getEntry(count) {
  let curCode, entryObj;

  getCode(count)
    .then(res => {
      count = Number(res) + 1;
      curCode = res;
      return getEntryFromFirebase(curCode);
    })
    .then((res) => {
      entryObj = res;
      log(entryObj);
      if(entryObj.family) {
        return getString(`Enter the family name (a string) or press <Enter> for ${entryObj.family}: `, true);
      } else {
        return getString(`Enter the family name (a string): `);
      }
    })
    .then(res => {
      log(res);

      if(res !== '') {
        entryObj.family = res;
      }

      log(entryObj);
      const arr = entryObj.names ? entryObj.names : [];
      return getNames(arr);
    })
    .then(res => {
      log(res);
      entryObj.names = res;
      return setJSONInFirebase(curCode, entryObj);
    })
    .then(() => {
      getEntry(count);
    })
    .catch( e => {
      console.log(`err in getEntry: ${e}`);
    });
}

function getCode(count) {
  return new Promise((resolve, reject) => {
    rl.question(`Enter code # (or press <Enter> for default next val ${count}): `, inp => {

      if(inp === '') {
        resolve(count);
      } else if ((/^[0-9]+$/.test(inp)) && (inp.length === 5)) {
        resolve(inp);
      } else {
        console.log(`Invalid code, must be 5-digit integer`);
        resolve(getCode(count));
      }
    });
  });
}

function getString(message, exit) {
  return new Promise((resolve, reject) => {
    rl.question(message, inp => {

      if((inp === '') && !exit) {
        console.log(`Must enter something`);
        resolve(getString(message));
      } else {
        resolve(inp);
      }
    });
  });
}

function getNames(names) {
  return new Promise((resolve, reject) => {
    const nameObj = {
      rsvp: 'notset'
    };

    getString(`Enter the person's name (a string): `, true)
      .then(res => {
        if (res) {
          nameObj.name = res;
          return getTrueFalse(`Does this person have a plus 1? (y/N): `);
        } else {
          resolve(names);
          return('end');
        }
      })
      .then(res => {
        if(res !== 'end') {
          nameObj.plus1 = res;
          names.push(nameObj);
          resolve(getNames(names));
        }
      })
      .catch( e => {
        console.log(`err in getNames: ${e}`);
      });
  });
}

function getTrueFalse(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, inp => {

      if(inp === '' || inp === 'n') {
        resolve(false);
      } else if (inp === 'y') {
        resolve(true);
      } else {
        console.log(`Must enter either y for yes, or n or <Enter> for no`);
        resolve(getPlus1());
      }
    });
  });
}

function getLargestCode(json) {
  let highest = 25050;
  for (const key of Object.keys(json)) {
    let keyNum = Number(key);
    highest = (highest > keyNum) ? highest : keyNum;
  }
  console.log(`highest code: ${highest}`);
  return highest;
}

console.log('/ --------- running update invitation JSON --------- /');
getJSONFromFirebase()
  .then(json => {
    let count = getLargestCode(json) + 1;
    getEntry(count);
  })
  .catch( e => {
    console.log(`err in root: ${e}`);
  });