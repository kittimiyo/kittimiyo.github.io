const readline = require('readline');
const fs = require('fs');
const Promise = require('promise');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = './initialRSVPInfo.json';

function writeJSONToFile(json) {
  const file = fs.createWriteStream(filePath);
  file.write(JSON.stringify(json));
}

function readJSONFromFile (readable) {
  return new Promise((resolve, reject) => {
    readable.on('data', (chunk) => {
      console.log(`Reading from file, received ${chunk.length} bytes of data.`);
      resolve(JSON.parse(chunk));
    });
  });
}

function getEntry(json, count) {
  let curCode;
  const entryObj = {
    totalPeople: 'notset'
  };

  getCode(count)
    .then(res => {
      count = Number(res) + 1;
      curCode = res;
    })
    .then(() => {
      return getString(`Enter the family name (a string): `);
    })
    .then(res => {
      entryObj.family = res;
      return getNames([]);
    })
    .then(res => {
      entryObj.names = res;
      json[curCode] = entryObj;
      writeJSONToFile(json);
      getEntry(json, count);
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

console.log('/ --------- running build invitation JSON --------- /');
const readable = fs.createReadStream(filePath);
readJSONFromFile(readable)
  .then(json => {
    let count = getLargestCode(json) + 1;
    getEntry(json, count);
  })
  .catch( e => {
    console.log(`err in root: ${e}`);
  });