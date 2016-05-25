let apiBase;

switch (process.env.NODE_ENV) {
  case 'production':
    apiBase = '';
    break;
  default:
    apiBase = 'http://0.0.0.0:3001';
}

module.exports = {
  dishMenuAPI: `${apiBase}/dish-menu`,
};
