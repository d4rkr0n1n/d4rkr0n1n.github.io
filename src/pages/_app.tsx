import '../styles/globals.css'
import { createTheme,NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        background: "#181a1b",
        backgroundAlpha: 'rgba(24,26,27,0.6)',
        primary: '#ffffff',
        primaryLight: '#222222',
      },
    }
  })
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        primary: '#000000',
        primaryLight: '#dddddd',
      }, 
      fonts:{

      }
    }
  })
  
  return (
    
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider>
  <Component {...pageProps} />
  </NextUIProvider>
</NextThemesProvider>
  )
}

