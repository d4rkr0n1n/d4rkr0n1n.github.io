import { createTheme } from "@nextui-org/react"

export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {}, // optional
    }
})

export const darkTheme = createTheme({
    type: 'dark',
    className: 'dark-elegant',
    theme: {
        colors: {
            primary: '#ffffff',
            primaryLight: '#222222',
            success: '#a2a2a2'
        },
        radii: {
            md: '4px'
        }
    }
})