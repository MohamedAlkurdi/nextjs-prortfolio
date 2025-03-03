'use client'

import { useState, useEffect } from 'react'
export default function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
        setTheme(initialTheme)
        document.documentElement.dataset.theme = initialTheme
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.dataset.theme = newTheme
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 text-2xl rounded-md bg-opacity-20 hover:bg-blue-500 hover:bg-opacity-30 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ?
                '🌙' : '☀️'}
        </button>
    )
}