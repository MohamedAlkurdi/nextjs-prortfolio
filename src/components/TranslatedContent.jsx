"use client"

import { useLocale } from "@/app/lib/i18n_context"
import useTranslation from "@/app/lib/useTranslation"

export default function TranslatedContent() {
    const locale = useLocale()
    const translation = useTranslation(locale)

    console.log("context content: ---->" ,locale)
    if (translation) {
        console.log("successfully fetched translations.")
    }
    return (
        <>
            {translation['homepage']['hero_title']}
        </>
    )
}