const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:e523e159-9aa4-4f79-9e9b-34adbcc1d9b6',
  key: '3a07823c-81eb-46c3-8a43-2938fe157709:xx6WNHzVE1Im9bxdejwq+m5/5+doGa7oXcbx1vAqlOg=',
});



app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.post('/users', (req, res) => {
  const { username } = req.body;
  const user = { name: username, id: username }

  chatkit
    .createUser({
      id: username,
      name: username,
    })
    .then(() => {
      console.log('Created user ', user.name)
      res.status(201).json(user)
    })
    .catch(err => {
      if (err.error === 'services/chatkit/user_already_exists') {
        console.log('User already exists ', user.name)
        res.status(201).json(user)
      } else {
        console.error(error)
        res.status(error.status).json(error)
      }
    });
});

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  });
  res.status(authData.status).send(authData.body);
});

const port = 3001;

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running on port ${port}`);
  }
});