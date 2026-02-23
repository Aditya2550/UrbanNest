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
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ DB connections successful!');
    console.log('Connected to DB:', mongoose.connection.name);
  });
// .catch((err) => console.error('❌ DB connection error:', err.message));

//CREATING MODEL FOR SCHEMA (ALWAYS NAME OF MODEL STARTS WITH CAPITAL ALPHABET)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App runnig on port ${port}...`);
});
