const donaciones = require ('./donacion.router');

function useApi (app) {
  app.use('/donaciones',donaciones);
}

module.exports = {useApi};
