// for later use
function isPromise(promise) {
  if(!promise) return false;
  return promise.then && promise.catch;
}