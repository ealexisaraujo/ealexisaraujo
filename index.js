const app = require('./app');
const { createConnection } = require('./db');
const { config } = require('./config/index');

createConnection();
app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
