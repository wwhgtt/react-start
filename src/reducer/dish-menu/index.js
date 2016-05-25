module.exports = function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_MENU_DATA':
      state = payload;
      return state;
    default:
      return state;
  }
};
