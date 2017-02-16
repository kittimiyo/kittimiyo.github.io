import { observable, action, extendObservable } from 'mobx';
import firebaseApp from './firebase';

class RSVPStore {
  constructor() {
    extendObservable(this, {
      // state data
      results: false,
      message: '',

      // functions
      setRSVPSearchResults: action((searchValue) => {
        if(validateQuery(searchValue)) {
          this.message = 'searching';
          const queryRef = firebaseApp.database().ref(searchValue);
          queryRef.once('value').then((snapshot) => {
            const result = snapshot.val();
            console.log('in getRSVPSearchResults, found!', result);
            if(result) {
              //this.message = '';
              //this.results = result;
            } else {
              this.message = 'not found';
            }
          });
        } else {
          this.message = 'invalid query';
        }
      }),

      resetSearch: action(() => {
        this.message = '';
        this.results = false;
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