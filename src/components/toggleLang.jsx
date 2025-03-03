'use client'

import { useRouter } from "../i18n/navigation"

export default function ToggleLang() {
    const router = useRouter()

    const handleLanguageChange = (event) => {
        const locale = event.target.value
        router.push('/', { locale: locale })
    }

    return (
        <div>
            <select
                onChange={handleLanguageChange}
                className="font-bold p-2 rounded-md bg-opacity-20 text-dark hover:bg-opacity-30 transition-colors"
                defaultValue="en"
            >
                <option className="font-bold" value="en">EN</option>
                <option className="font-bold" value="ar">AR</option>
            </select>
        </div>
    )
}