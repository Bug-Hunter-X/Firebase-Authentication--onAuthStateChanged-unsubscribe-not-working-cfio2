import { onAuthStateChanged, getAuth } from "firebase/auth";

const auth = getAuth();
let unsubscribe;

function handleAuthChanges(){
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('User signed in with UID:', uid);
      // ...
    } else {
      // User is signed out
      // ...
      console.log('User is signed out');
    }
  });
}

// Call handleAuthChanges to establish the listener when needed

handleAuthChanges();

// Clean up listener when it is no longer needed:
export function cleanupAuthListener(){
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
}
// Call cleanupAuthListener() when component unmounts or when you are done with the listener.