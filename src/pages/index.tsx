
import { Inter } from 'next/font/google'
import Button from '@mui/material/Button';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Button variant="contained">Hello world</Button>;
    </>
  )
}
