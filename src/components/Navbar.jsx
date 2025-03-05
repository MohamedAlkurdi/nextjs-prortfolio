'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ToggleTheme'
import ToggleLang from './toggleLang'
import * as motion from 'motion/react-client'
import useTranslation from '@/app/lib/useTranslation'
import { useLocale } from '@/app/lib/i18n_context'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const locale = useLocale()
    const translation = useTranslation(locale)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    const navVariants = {
        top: {
            backgroundColor: "transparent",
            color: "var(--content_color)",
            boxShadow: 'none',
            padding: '0.5rem 2.5rem',
            position: "fixed",
            width: "60%",
            top: "0",
            left: "50%",
            transform: "translate(-50%, 0)",
            borderRadius: "0px",
            direction: "ltr",
        },
        scrolled: {
            backgroundColor: "var(--nav_bg)",
            color: "var(--lightest)",
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '0.5rem 2rem',
            position: "fixed",
            width: "60%",
            top: "20px",
            left: "50%",
            transform: "translate(-50%, 0)",
            borderRadius: "12px",
            direction: "ltr",
        }
    }

    return (
        <motion.nav
            initial="top"
            animate={scrolled ? "scrolled" : "top"}
            variants={navVariants}
            transition={{
                duration: 0.2,
                ease: "easeIn"
            }}
            className="flex flex-row items-center justify-center z-50 ltr"
        >
            <div className='flex justify-between items-center gap-5'>
                <Link className="text-xl px-2 py-1 rounded hover:bg-light duration-150 hover:text-darkest" href={`/${locale}`}>{translation.navigation.experience}</Link>
                <Link className="text-xl px-2 py-1 rounded hover:bg-light duration-150 hover:text-darkest" href={`/${locale}`}>{translation.navigation.projects}</Link>
                <Link className="text-xl px-2 py-1 rounded hover:bg-light duration-150 hover:text-darkest" href={`/${locale}`}>{translation.navigation.services}</Link>
                <Link className="text-xl px-2 py-1 rounded hover:bg-light duration-150 hover:text-darkest" href={`/${locale}`}>{translation.navigation.blog}</Link>
                <Link className="text-xl px-2 py-1 rounded hover:bg-light duration-150 hover:text-darkest" href={`/${locale}`}>{translation.navigation.contact}</Link>
                <div className='flex flex-row gap-5 items-center'>
                    <ThemeToggle />
                    <ToggleLang />
                </div>
            </div>
        </motion.nav>
    )
}