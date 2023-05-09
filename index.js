const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

mongoose
  .connect(
    'mongodb+srv://frendip:frendip123@vk-social-network.n2zm9yq.mongodb.net/vkwebsite?retryWrites=true&w=majority',
  )
  .then(() => console.log('Successful connection to the database.'))
  .catch((err) => console.log('Failed connection to the database ->', err));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server started on PORT ${PORT}`);
});
