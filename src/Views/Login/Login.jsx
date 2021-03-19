import React, { useState } from "react";
import { Redirect } from 'react-router-dom'

//MaterialUi Import
import { Button, TextField } from "@material-ui/core";
import { api } from "../../services/api";

function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);

  async function AuthUser(dados) {    

      const response = await api.get(`/usuarios?user=${dados.user}&password=${dados.password}`)
      
      if(response.data.length <= 0){
        window.alert("Usuário não existe ou verifique a credencial utilizada")
      } else {
        setRedirect(true)
      }

  }

  return (
    
    <form
      onSubmit={(event) => {
        event.preventDefault();
        AuthUser({ user, password });
      }}
    >
      {redirect && <Redirect to="/"/>}

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
