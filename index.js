const app = require('./app');
const { createConnection } = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

createConnection();
app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
