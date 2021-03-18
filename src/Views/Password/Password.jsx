import { Button, Container, TextField } from '@material-ui/core'
import {Link} from 'react-router-dom'
import React from 'react'

function Password(){
    return(
        <Container>
            <h1>Nova Senha</h1>
            <form>
                <TextField label='Nome do Serviço' variant='outlined'></TextField>
                <TextField label='Usuário' variant='outlined'></TextField>
                <TextField label='Senha' variant='outlined'></TextField>
                <Button variant="contained" color="primary">Salvar</Button>

                <Link to='/'>
                    <Button variant="contained" color="secondary">Voltar</Button>
                </Link>

            </form>
        </Container>
    )
}

export default Password