<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
$app->get('/buscarTodos', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT idcomentario, nome_usuario, datapublicacao, descricao FROM comentario ORDER BY datapublicacao DESC");
   $sth->execute();
   $todos = $sth->fetchAll();
   return $this->response->withJson($todos);
});

