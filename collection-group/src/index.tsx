import React from 'react';
import ReactDOM from 'react-dom';

import firebase from './firebase';

const App = () => {
  React.useEffect(() => {
    firebase
      .firestore()
      .collectionGroup('friends')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return <h1>hello</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
