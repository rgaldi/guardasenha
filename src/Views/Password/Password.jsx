import { Button, Container, TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

function Password() {
  const [servico, setServico] = useState();
  const [user, setUser] = useState();
  const [senha, setSenha] = useState();
  const [redirect, setRedirect] = useState(false);

  async function Save() {
    await api
      .post("/senhas", {
        servico,
        user,
        senha,
      })
      .then(() => setRedirect(true));
  }

  return (
    <Container>
      {redirect && <Redirect to="/" />}

      <h1>Nova Senha</h1>
      <form>
        <TextField
          label="Nome do Serviço"
          variant="outlined"
          onChange={(event) => {
            setServico(event.target.value);
          }}
        ></TextField>

        <TextField
          label="Usuário"
          variant="outlined"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        ></TextField>

        <TextField
          label="Senha"
          variant="outlined"
          onChange={(event) => {
            setSenha(event.target.value);
          }}
        ></TextField>
        <Button variant="contained" color="primary" onClick={Save}>
          Salvar
        </Button>

        <Link to="/">
          <Button variant="contained" color="secondary">
            Voltar
          </Button>
        </Link>
      </form>
    </Container>
  );
}

export default Password;
