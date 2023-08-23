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
};
