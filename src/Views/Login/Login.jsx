import React, { useState } from "react";

//MaterialUi Import
import { Button, Container, TextField } from "@material-ui/core";

function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function AuthUser(dados) {
    console.log(dados.password);
    console.log(dados.user);
    //Rota da API para atenticar usuário e redirecionar para o Home
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        AuthUser({ user, password });
      }}
    >
      <h1>Login</h1>

      <TextField
        type="text"
        id="user"
        label="Usuário"
        variant="outlined"
        fullWidth
        margin="normal"
        value={user}
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />

      <TextField
        type="password"
        id="password"
        label="Senha"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <Button type="submit" variant="contained" color="primary">
        Entrar!
      </Button>

      <Button variant="contained" color="secondary">
        Cadastrar Usuário
      </Button>
    </form>
  );
}

export default Login;
