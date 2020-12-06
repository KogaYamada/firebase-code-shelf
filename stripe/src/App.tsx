import React, { FC, useState, useEffect } from 'react';
import firebase from './firebase';

const App: FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    firebase
      .firestore()
      .doc('/counter/user1')
      .onSnapshot((user) => setCount(user?.data()?.count as number));
  }, []);

  const increment = () => {
    firebase
      .firestore()
      .doc('/counter/user1')
      .update({
        count: count + 1,
      });
    // firebase.firestore().doc('/counter/user1').update({count: firebase.firestore.FieldValue.increment(1)})
  };
  return (
    <>
      <h1>number:{count}</h1>
      <button onClick={increment}>インクリメント</button>
    </>
  );
};

export default App;
