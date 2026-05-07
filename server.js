const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!')
  });

// .catch((err) => console.error('❌ DB connection error:', err.message));

//CREATING MODEL FOR SCHEMA (ALWAYS NAME OF MODEL STARTS WITH CAPITAL ALPHABET)

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App runnig on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLER REJECTION! 💥 SHUTTING down...');
  server.close(() => {
    process.exit(1);
  });
});