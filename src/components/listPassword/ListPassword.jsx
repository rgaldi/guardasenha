import React, { useEffect, useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

import { ListaSenhas } from "../../services/api";

function ListPassword({ url }) {
  const [password, setPassword] = useState([]);

  useEffect(() => {
    ListaSenhas(url, setPassword);
  }, [url]);


  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Serviço</TableCell>
            <TableCell align="center">Usuário</TableCell>
            <TableCell align="center">Senha</TableCell>
            <TableCell align="center">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {password.map((pswd) => (
            <TableRow key={pswd.id}>
              <TableCell component="th" scope="row">
                {pswd.servico}
              </TableCell>
              <TableCell align="center">{pswd.user}</TableCell>
              <TableCell align="center">{pswd.senha}</TableCell>
              <TableCell align="center">
                <Button>Alterar</Button>
                <Button>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListPassword;
