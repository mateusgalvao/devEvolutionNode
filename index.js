const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

const DB = require('./src/setup/DB');
DB.connect();

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

//ROTAS DA API
const usuarioRoute = require('./src/routes/usuarios');
app.use('/usuario', usuarioRoute);

const pedidosRoute = require('./src/routes/pedidos');
app.use('/pedido', pedidosRoute);

const produtosRoute = require('./src/routes/produtos');
app.use('/produto', produtosRoute);

const clientesRoute = require( './src/routes/clientes');
app.use('/cliente', clientesRoute);


//ROTAS DAS VIEWS
const cadastroRoute = require('./src/routes/cadastro');
app.use('/cadastro', cadastroRoute);

const dashboardRoute = require('./src/routes/dashboard');
app.use('/dashboard', dashboardRoute);

const homeClienteRoute = require('./src/routes/homeCliente');
app.use('/home', homeClienteRoute);

const indexRoute = require('./src/routes/index');
app.use('/', indexRoute);

app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000}")
})