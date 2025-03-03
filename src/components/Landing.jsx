"use client"
import { TypeAnimation } from "react-type-animation"
import { useTranslations } from "next-intl"

export default function Landing() {
    const t = useTranslations("landing")

    const titles = [
        t("title1"),
        1000,
        t("title2"),
        1000,
        t("title3"),
        1000,
        t("title1"),
        1000,
    ]

    return (
        <div>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-light">
                    {t('hello')}
                </span>
                <br />
                <TypeAnimation
                    className="text-content_color"
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
