import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


type SearchProps = {
  loadUser: ( userName: string) => Promise<void>;
}

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState('');
  
  
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>repositórios mais acessados</p>
      <div>
        <TextField 
        id="outlined-basic" 
        label="Digite o nome do usuário:" 
        size="small" variant="filled" 
        onChange={(e) => setUserName(e.target.value)} 
        />
        <Button 
        variant="contained" 
        endIcon={<SendIcon />}
        onClick={() => loadUser(userName)}
         >
          Send
        </Button>
      </div>
    </div>

  )
}

export default Search