export default store => next => action => {
    try {
      console.log('ACTION', action)
      next(action)
    } catch(err) {
      console.error('__VALIDATION__error', err);
    }
}

console.log('anythng');
