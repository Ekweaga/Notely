import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthContext, AuthProvider} from "../services/Context/context"
import { useContext } from 'react'

export default function App({ Component, pageProps }: AppProps) {
 
  return(
<>
<AuthProvider>


 <Component {...pageProps} />
   

</AuthProvider>
</>
   
  )
 
 
 
 
}
