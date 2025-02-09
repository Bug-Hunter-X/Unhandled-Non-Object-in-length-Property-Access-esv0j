function foo(x) {
  // Check if x is an object and has a length property
  if (typeof x === 'object' && x !== null && typeof x.length === 'number') {
    return x.length; 
  } else {
    return 0; // Handle non-objects or null values
  }
}