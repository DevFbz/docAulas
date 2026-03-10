const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const imageFolder = path.join(__dirname, 'img');

app.use('/img', express.static(imageFolder));

app.get('/api/images', (req, res) => {
  fs.readdir(imageFolder, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler as imagens' });
    }

    const imageFiles = files.filter(file =>
      /\.(jpe?g|png|gif)$/i.test(file)
    ).map(file => `/img/${file}`);

    res.json(imageFiles);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
