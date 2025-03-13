"use client"
import { useLocale } from "@/app/lib/i18n_context"
import useTranslation from "@/app/lib/useTranslation"
import { TypeAnimation } from "react-type-animation"
import InfiniteScrollingBanner from "./vertical_banner"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from '@hugeicons/react';
import { Github01Icon } from '@hugeicons/core-free-icons';
import { Facebook01Icon } from '@hugeicons/core-free-icons';
import { NewTwitterIcon } from '@hugeicons/core-free-icons';
import { Linkedin01Icon } from '@hugeicons/core-free-icons';
import { InstagramIcon } from '@hugeicons/core-free-icons';
import LinkButton from "./LinkButton"



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
        translation.typewrite_content.title1,
        1000,
    ]

    return (
        <div className="px-12 py-16 h-screen Lnading flex justify-between items-center">
            <div className="typewriter min-w-[70%]">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-light">
                        {translation.typewrite_content.hello}
                    </span>
                    <br />
                    <TypeAnimation
                        className={`text-content_color ${locale == 'en' ? " text-6xl" : "7xl"}`}
                        sequence={titles}
                        wrapper="span"
                        speed={50}
                        repeat={2}
                    />
                </h1>
                <div className="links flex gap-6 mt-10">
                    <LinkButton content={'Github'} icon={Github01Icon} />
                    <LinkButton content={'Linkedin'} icon={Linkedin01Icon} />
                    <LinkButton content={'Instagram'} icon={InstagramIcon} />
                    <LinkButton content={'Twitter'} icon={NewTwitterIcon} />
                    <LinkButton content={'Facebook'} icon={Facebook01Icon} />
                </div>
            </div>
            <InfiniteScrollingBanner />
        </div>
    )
}

