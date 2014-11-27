var express = require("express");
var app     = express();

app.use(express.static("public"));

/**
 * @api {get} /signin Singin
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Logado!"
 *    }
 *
 */
app.get("/signin", function(req, res) {
  res.json({status: "Logado!"});
});

/**
 * @api {post} /signup Signup
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de cadastro efetuado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Cadastrado!"
 *    }
 *
 */
app.post("/signup", function(req, res) {
  res.json({status: "Cadastrado!"});
});

/**
 * @api {delete} /logout Logout
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de saída do sistema
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Saindo do sistema!"
 *    }
 *
 */
app.delete("/logout", function(req, res) {
  res.json({status: "Saindo do sistema!"});
});

/**
 * @api {put} /update Update
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de dados atualizados
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Dados atualizados!"
 *    }
 *
 */
app.put("/update", function(req, res) {
  res.json({status: "Dados atualizados!"});
});


app.listen(3000, function() {
  console.log("Api up and running!");
});