import { useState } from 'react'

export const useTheme = () => {
    const [theme, setTheme] = useState('light-theme')

    return [theme, setTheme]
}