const g = require('dyson-generators');
let idPointer = 0;
module.exports = {
  cache: false,
  path: '/orders',
  size: 1000,
  collection: true,
  template: {
    id: function id() {
      if (idPointer > 1000) {
        idPointer = 0;
      }
      return idPointer++;
    },
    name: g.name,
    price: function price() {
      return Math.random() * 100;
    },
  },
};
