import { observable, action, extendObservable } from 'mobx';
import firebaseApp from './firebase';

class RSVPStore {
  constructor() {
    extendObservable(this, {
      // state data
      results: false,
      searching: false,
      query: '',
      message: '',

      // functions
      getRSVP: action((searchValue) => {
        if(validateQuery(searchValue)) {
          this.query = searchValue;
          this.searching = true;
          const queryRef = firebaseApp.database().ref(this.query);
          queryRef.once('value').then((snapshot) => {
            const result = snapshot.val();
            console.log('in getRSVPSearchResults, found!', result);
            if(result) {
              this.message = '';
              this.searching = false;
              this.results = result;
            } else {
              this.searching = false;
              this.message = 'not found';
              this.query = '';
            }
          });
        } else {
          this.searching = false;
          this.message = 'invalid query';
        }
      }),

      setRSVP: action((newValues) => {
        const queryRef = firebaseApp.database().ref(this.query);
        queryRef.set(newValues).then(() => {
          console.log('set values successfully');
        })
        .catch((e) => {
          console.log('set value problem:', e);
        });
      }),

      resetSearch: action(() => {
        this.message = '';
        this.searching = false;
        this.results = false;
        this.query = '';
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