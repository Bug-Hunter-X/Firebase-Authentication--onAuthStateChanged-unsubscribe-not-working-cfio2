const unsubscribe = onAuthStateChanged(auth, (user) => {
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

// unsubscribe from the listener when you are done with it
// this is important to prevent memory leaks
unsubscribe();