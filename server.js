import app from "./rotas/src/app.js"
import conexaobd from "./BD/conexaobd.js"
const PORT = 3000

app.listen(PORT,() => {
    console.log(`Servidor rodando no endereço https://localhost:${PORT}`)

})


