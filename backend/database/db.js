import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

const Connection = async () => {
  const URL = process.env.MONGODB_URI.replace('<user>', process.env.USER)
    .replace('<password>', process.env.PASSWORD)
    .replace('<database>', process.env.DATABASE);

  try {
    await mongoose.connect(URL);
    console.log('database connected Successfully!');
  } catch (error) {
    console.log('database connected Unsuccessfully!', error);
  }
};

export default Connection;
