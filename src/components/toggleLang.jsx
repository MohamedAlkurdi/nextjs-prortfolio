'use client'
import { redirect } from "next/navigation"

export default function ToggleLang() {

    const handleLanguageChange = (event) => {
        const locale = event.target.value
        console.log(locale)
        redirect(`/${locale}`)
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