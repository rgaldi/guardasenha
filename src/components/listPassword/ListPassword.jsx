import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";

function ListPassword() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Serviço</TableCell>
            <TableCell align="right">Usuário</TableCell>
            <TableCell align="right">Senha</TableCell>
            <TableCell align="center">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">Facebook</TableCell>
              <TableCell align="right">rgaldi</TableCell>
              <TableCell align="right">teste123</TableCell>
              <TableCell align="center">
                  <Button>Alterar</Button>
                  <Button>Excluir</Button>
              </TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListPassword;
