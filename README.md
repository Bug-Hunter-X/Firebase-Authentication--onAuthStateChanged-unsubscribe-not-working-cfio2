# Firebase Authentication Unsubscribe Issue

This repository demonstrates a common issue with Firebase Authentication's `onAuthStateChanged` listener: forgetting to unsubscribe.

The `authBug.js` file shows the incorrect usage, failing to call the `unsubscribe()` function.  This results in a persistent listener even after the component or function that initiated it is no longer in use. This leads to memory leaks and can cause unexpected behavior or crashes.

The `authSolution.js` file provides the correct solution demonstrating how to properly unsubscribe from the `onAuthStateChanged` listener to prevent memory leaks.