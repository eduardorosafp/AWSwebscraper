import express from "express";

const app = express();

//Iniciar o servidor na porta disponivel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});