const express = require("express");

const app = express();

// Iniciar o servidor na porta disponível
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
