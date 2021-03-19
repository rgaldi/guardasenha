import { Button, Container, TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

function Password({ match }) {
  const [servico, setServico] = useState();
  const [user, setUser] = useState();
  const [senha, setSenha] = useState();
  const [redirect, setRedirect] = useState(false);

  async function Save() {
    if (match.params.id) {
      await api
        .put(`/senhas/${match.params.id}`, {
          servico,
          user,
          senha,
        })
        .then(() => setRedirect(true));
    } else {
      await api
        .post("/senhas", {
          servico,
          user,
          senha,
        })
        .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    async function LoadPasswordDatail() {
      await api.get(`/senhas/${match.params.id}`).then((response) => {
        setServico(response.data.servico);
        setUser(response.data.user);
        setSenha(response.data.senha);
      });
    }
    LoadPasswordDatail();
  }, []);

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
          value={servico}
        ></TextField>

        <TextField
          label="Usuário"
          variant="outlined"
          onChange={(event) => {
            setUser(event.target.value);
          }}
          value={user}
        ></TextField>

        <TextField
          label="Senha"
          variant="outlined"
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          value={senha}
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
