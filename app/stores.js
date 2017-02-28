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
      update: false,
      saved: false,

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

              if(result.totalPeople !== 'notset') {
                this.update = true
              }
            } else {
              this.searching = false;
              this.message = 'not found';
              this.query = '';
            }
          });
        } else {
          this.searching = false;
          this.message = 'invalid query';
          this.update = false;
        }
      }),

      setRSVP: action((newValues) => {
        const queryRef = firebaseApp.database().ref(this.query);
        queryRef.set(newValues).then(() => {
          console.log('set values successfully');
          this.saved = true;
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
        this.saved = false;
      })
    })
  }
}

class NavigatorStore {
  constructor() {
    extendObservable(this, {
      // state data
      selected: 'rsvp',

      // functions
      setSelected: action((selected) => {
        this.selected = selected;
      })
    })
  }
}

// helper fcns
const validateQuery = value => {
  const isNum = /^[0-9]+$/.test(value);
  return (value.length === 5 && isNum);
};

export default {
  RSVPStore: new RSVPStore(),
  NavigatorStore: new NavigatorStore()
};