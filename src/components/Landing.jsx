"use client"
import { useLocale } from "@/app/lib/i18n_context"
import useTranslation from "@/app/lib/useTranslation"
import { TypeAnimation } from "react-type-animation"

export default function Landing() {
    const locale = useLocale()
    const translation = useTranslation(locale)

    const titles = [
        translation.typewrite_content.title1,
        1000,
        translation.typewrite_content.title2,
        1000,
        translation.typewrite_content.title3,
        1000,
        translation.typewrite_content.title2,
        1000,
    ]

    return (
        <div className="">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-light">
                    {translation.typewrite_content.hello}
                </span>
                <br />
                <TypeAnimation
                    className="text-content_color text-7xl"
                    sequence={titles}
                    wrapper="span"
                    speed={50}
                    repeat={2}
                />
            </h1>
            <div className="h-[1000px]"></div>
        </div>
    )
}
