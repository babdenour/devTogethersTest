import { Button, Input } from '@mui/material';
import { useEffect } from 'react';
import { userData } from '../utils';


export const Home = () => {

  useEffect(() => {
    userData();
  })

  return (
    <div className='flex flex-col h-full lg:h-screen justify-center items-center gap-5 p-8 lg:p-0 bg-slate-500'>
      <Input placeholder='username'
        sx={{
          backgroundColor: 'white'
        }} />
      <Input placeholder='password'
        sx={{
          backgroundColor: 'white'
        }} />
      <Button variant="contained">Valider</Button>

    </div>
  )
};