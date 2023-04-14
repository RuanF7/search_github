import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import classes from './Search.module.css';

type SearchProps = {
  loadUser: ( userName: string) => Promise<void>;
}

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState('');
  
  
  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>repositórios mais acessados</p>
      <div className={classes.search_container}>
        <TextField 
        id="outlined-basic" 
        label="Digite o nome do usuário:" 
        size="small" variant="filled" 
        onChange={(e) => setUserName(e.target.value)} 
        />
        <Button 
        variant="contained" 
        endIcon={<SearchIcon />}
        onClick={() => loadUser(userName)}
         >
          Pesquisar
        </Button>
      </div>
    </div>

  )
}

export default Search