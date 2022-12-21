import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthProvider} from "../services/Context/context"

export default function App({ Component, pageProps }: AppProps) {
  return(

    <AuthProvider>
 <Component {...pageProps} />
    </AuthProvider>
  )
 
 
 
 
}
