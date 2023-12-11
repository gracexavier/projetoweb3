import express from 'express'//Importando o express

const app = express()//Criando uma instância

app.use(express.json())

//ROTAS DE CLIENTES//
const clientesCadastrados =[
    {id:1, nome: "Josino Neto", email:"josino@gmail.com", telefone: 81984683280},
    {id:2, nome: "Carlos Jose", email:"josecarlos@gmail.com", telefone: 81984683900}]

//Funççao - Filtro de cliente por ID//
function buscarClientePorId(id){
    return clientesCadastrados.filter(clientesCadastrados => clientesCadastrados.id == id)
}

//Pegar a posição ou index do elemento no array por id//
function buscarIndexCliente(id){
    return clientesCadastrados.findIndex(clientesCadastrados => clientesCadastrados.id == id)
}

//Lista os clientes cadastrados//
app.get('/clientesCadastrados', (req, res) => {
    res.status(200).send(clientesCadastrados)
})

//Filtro de cliente por ID//
app.get('/clientesCadastrados/:id', (req, res) =>{
    res.json(buscarClientePorId(req.params.id))
})

//Inserir um novo cliente//
app.post('/clienteCadastro', (req, res) =>{
    clientesCadastrados.push(req.body)
    res.status(201).send('Cliente cadastrado com sucesso!')
})

//Exclui um cliente//
app.delete('/clientesDeletado/:id', (req, res) =>{
    let index = buscarIndexCliente(req.params.id)
    clientesCadastrados.splice(index,1)
    res.send('Cliente excluído com sucesso!')
})

//Atualiza o cliente//
app.put('/clientesAtualizado/:id', (req, res) =>{
    let index = buscarIndexCliente(req.params.id)
    clientesCadastrados[index].nome = req.body.nome
    clientesCadastrados[index].email = req.body.email
    clientesCadastrados[index].telefone = req.body.telefone
    res.json(clientesCadastrados)
})

//------------------------------------------------------ROTAS DE PROJETOS-----------------------------------------------------//
//PROJETOS//
const projetosCadastrados =[
    {id:1, nome: "Sistema de Gestão Hospitalar", data: "11/08/2023", orcamento: 12000, descricao:"Um Sistema de Gestão Hospitalar (SGH) é uma plataforma integrada de software projetada para otimizar e gerenciar eficientemente as operações em ambientes hospitalares. Esses sistemas são desenvolvidos para melhorar a eficiência, qualidade dos serviços prestados, controle de custos e fornecer suporte na tomada de decisões para profissionais de saúde e administradores."},
    {id:2, nome: "Implementação de um Novo Servidor", data: "12/04/2022", orcamento: 15600, descricao:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab minus, natus eveniet placeat ipsum doloribus quia at numquam tenetur, eos quaerat velit delectus, sequi possimus perspiciatis nobis. Omnis, architecto harum."}]
    
//LISTA OS PROJETOS CADASTRADOS//
app.get('/listaProjetosCadastrados', (req, res) => {
        res.status(200).send(projetosCadastrados)
})


//Filtro de projetos por ID//
function buscarProjetoPorId(id){
    return projetosCadastrados.filter(projetosCadastrados => projetosCadastrados.id == id)
}

//Pegar a posição ou index do elemento no array por id//
function buscarIndexProjeto(id){
    return projetosCadastrados.findIndex(projetosCadastrados => projetosCadastrados.id == id)
}

//Filtro de PROJETO por ID//
app.get('/listaProjetosCadastrados/:id', (req, res) =>{
    res.json(buscarProjetoPorId(req.params.id))
})


//Inserir um novo projeto//
app.post('/projetoCadastrado', (req, res) =>{
    projetosCadastrados.push(req.body)
    res.status(201).send('Projeto cadastrado com sucesso!')
})

//Exclui um PROJETOS//
app.delete('/projetoDeletado/:id', (req, res) =>{
    let index = buscarIndexProjeto(req.params.id)
    projetosCadastrados.splice(index,1)
    res.send('Projeto excluído com sucesso!')
})

//Atualiza o PROJETOS//
app.put('/projetosAtualizado/:id', (req, res) =>{
    let index = buscarIndexProjeto(req.params.id)
    projetosCadastrados[index].nome = req.body.nome
    projetosCadastrados[index].data = req.body.data
    projetosCadastrados[index].orcamento = req.body.orcamento
    projetosCadastrados[index].descricao = req.body.descricao
    res.json(projetosCadastrados)
})

//------------------------------------------------------ROTAS DE USUÁrio----------------------------------------------------//

const cadastroDeUsuario =[{id:1, nome: "Emanuel Reizinho do Back End", email:"emanuelzinho_@gmail.com", senha: "Abhcj&54"}]

//LISTA O USUÁRIO CADASTRADOS//
app.get('/UsuarioCadastrado', (req, res) => {
    res.status(200).send(cadastroDeUsuario)
})

//CADASTRA UM NOVO USUÁRIO//
app.post('/cadastroDeUsuario', (req, res) =>{
    cadastroDeUsuario.push(req.body)
    res.status(201).send('Usuário cadastrado com sucesso!')
})

//DELETA UM USUÁRIO CADASTRADO//
function buscarIndexDoUsuárioCadastrado(id){
    return cadastroDeUsuario.findIndex(cadastroDeUsuario => cadastroDeUsuario.id == id)
}

app.delete('/excluirUsuario/:id', (req, res) =>{
    let index = buscarIndexDoUsuárioCadastrado(req.params.id)
    cadastroDeUsuario.splice(index,1)
    res.send('Usuário excluído com sucesso!')
})


app.put('/atualizarUsuario/:id', (req, res) =>{
    let index = buscarIndexDoUsuárioCadastrado(req.params.id)
    cadastroDeUsuario[index].nome = req.body.nome
    cadastroDeUsuario[index].email = req.body.email
    cadastroDeUsuario[index].senha = req.body.senha
    res.json(cadastroDeUsuario)
})






export default app