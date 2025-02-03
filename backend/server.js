const express = require('express');
const app = express();
const port = 3000;

app.get('/generate-tryon-link', (req, res) => {
  const productIds = req.query.ids; // IDs dos produtos (ex: "12432136,13831069,...")
  const tryOnLink = `https://api.imvu.com/image_dressup/${productIds}?width=750&height=1300`;
  res.json({ tryOnLink });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});