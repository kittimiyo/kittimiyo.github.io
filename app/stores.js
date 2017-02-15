import { observable, action, extendObservable } from 'mobx';
import firebaseApp from './firebase';

class RSVPStore {
  constructor() {
    extendObservable(this, {
      // state data
      results: false,

      // functions
      setRSVPSearchResults: action((searchValue) => {
        let found = false;
        //console.log('in getRSVPResults, searchValue:', searchValue);
        if(validateQuery(searchValue)) {
          this.results = 'searching';
          const queryRef = firebaseApp.database().ref(searchValue);
          queryRef.once('value').then((snapshot) => {
            console.log('in getRSVPSearchResults, found!', snapshot.val());
            const result = snapshot.val();
            if(result) {
              found = true;
              this.results = result;
            } else {
              this.results = 'not found';
            }
          });
        } else {
          this.results = 'invalid query';
        }
      })
    })
  }
}

// helper fcns
const validateQuery = value => {
  return !!value.length;
};

export default {
  RSVPStore: new RSVPStore()
};