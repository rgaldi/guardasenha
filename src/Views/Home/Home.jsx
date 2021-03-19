import { Button, Container } from "@material-ui/core";
import React from "react";
import ListPassword from "../../components/listPassword/ListPassword";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <Container>
      <Link to='/password'> 
        <Button type="submit" variant="contained" color="primary">
          Adicionar Nova Senha
        </Button>
      </Link>
      <ListPassword url={'/senhas'}/>
    </Container>
  );
}

export default Home;
