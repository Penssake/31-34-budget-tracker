'use strict';

export const rendIf = (test, component) => test ? component : undefined
export const classToggler = (options) =>
  Ocject.keys(options).filter(key => options[key]).join('')
