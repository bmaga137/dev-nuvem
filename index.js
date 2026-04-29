const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send(`

        <html>
            <head>
                <title>Home Page</title>
            <head>
            <body>
                <h1>Seja bem vindo à página principal</h1>
                <p>Teste as outras rotas!</p>
            </body>
        </html>
    `);
})

//rota do cadastro de produtos
app.get("/carros", function(req,res){
    res.send("<h1>Ainda não há nada aqui!</h1>");
})

//rota com parametro 
app.get("/consulta/:elemento", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("<h2>Retorno da sua consulta: </h2>"+"<h3>" + req.params.elemento + "</h3>");
})


//rota com parametro opcional
app.get("/cadastro/:nome", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h2>Produto" + nome + " adcionado!</h2>");
    }else{
        res.send("Carro adicionado com sucesso");
    }
    
})


app.listen(process.env.PORT ?? 4000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})