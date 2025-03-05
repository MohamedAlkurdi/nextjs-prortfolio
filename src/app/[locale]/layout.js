import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import { handleLocale } from "../lib/i18n_config";
import { LocaleProvider } from "../lib/i18n_context";

export default async function LocaleLayout({ children, params }) {
    const locale = await handleLocale(params)
    return (
        <LocaleProvider locale={locale}>
            <div className={`${locale === 'en' ? 'ltr' : 'rtl'}`}>
                <Navbar />
                <Landing />
                {children}
            </div>
        </LocaleProvider>
    )
}