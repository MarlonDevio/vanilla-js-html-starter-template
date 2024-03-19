class SelectorHelper {
  constructor() {}

  byId = (id) => document.getElementById(id);
  byClass = (className) => document.querySelectorAll(className);
}

const selectorHelper = new SelectorHelper();
export const { byClass, byId } = selectorHelper;
