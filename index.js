import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouters from './routers/authRouters.js';
import userRouters from './routers/userRouters.js';

const PORT = process.env.PORT || 3002;

const app = express();

mongoose
  .connect(
    'mongodb+srv://frendip:frendip123@vk-social-network.n2zm9yq.mongodb.net/vkwebsite?retryWrites=true&w=majority',
  )
  .then(() => console.log('Successful connection to the database.'))
  .catch((err) => console.log('Failed connection to the database ->', err));

app.use(express.json());
app.use(cors());

app.use(authRouters);
app.use(userRouters);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server started on PORT ${PORT}`);
});
