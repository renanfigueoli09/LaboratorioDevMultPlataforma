import express, { Response, Request } from "express";
import post from "../models";
export const Routes = (app = express()) => {
  app.route("/").get((req: Request, res: Response) => {
    res.render("primeira_pagina");
  });
  app.get("/consulta", (req, res) => {
    post
      .findAll()
      .then((post) => {
        res.render("consulta", { post });
      })
      .catch((erro) => {
        console.log("Erro ao carregar dados do banco: " + erro);
      });
  });
  app.post("/cadastrar", (req, res) => {
    post
      .create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao,
      })
      .then(() => {
        res.redirect("/");
      })
      .catch((erro) => {
        res.send("Falha ao cadastrar os dados: " + erro);
      });
  });
  app.get("/editar/:id", function (req, res) {
    post.findAll({ where: { 'id': req.params.id } }).then(function (post) {
      res.render("editar", { post })
    }).catch(function (erro) {
      console.log("Erro ao carregar dados do banco: " + erro)
    })
  })

  app.get("/excluir/:id", function (req, res) {
    post.destroy({ where: { 'id': req.params.id } }).then(function () {
      res.render("primeira_pagina")
    }).catch(function (erro) {
      console.log("Erro ao excluir ou encontrar os dados do banco: " + erro)
    })
  })

  app.post("/cadastrar", function (req, res) {
    post.create({
      nome: req.body.nome,
      telefone: req.body.telefone,
      origem: req.body.origem,
      data_contato: req.body.data_contato,
      observacao: req.body.observacao
    }).then(function () {
      res.redirect("/")
    }).catch(function (erro) {
      res.send("Falha ao cadastrar os dados: " + erro)
    })
  })

  app.post("/atualizar", function (req, res) {
    post.update({
      nome: req.body.nome,
      telefone: req.body.telefone,
      origem: req.body.origem,
      data_contato: req.body.data_contato,
      observacao: req.body.observacao
    }, {
      where: {
        id: req.body.id
      }
    }).then(function () {
      res.redirect("/consulta")
    })
  })
};
