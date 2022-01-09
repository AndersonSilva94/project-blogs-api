const express = require('express');
const { usersRoute, loginRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use('/user', usersRoute);
app.use('/login', loginRoute);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));