import mongoose from 'mongoose';

export const dbconnection = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Restaurant"
  };

  mongoose.connect(process.env.MONGO_URL, options)
    .then(() => {
      console.log('Connected to the Restaurant database successfully');
    })
    .catch((err) => {
      console.error(`Error occurred while connecting to the Restaurant database: ${err}`);
    });

  const userOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "users"
  };

  mongoose.connect(process.env.MONGO_URL, userOptions)
    .then(() => {
      console.log('Connected to the Users database successfully');
    })
    .catch((err) => {
      console.error(`Error occurred while connecting to the Users database: ${err}`);
    });
};
