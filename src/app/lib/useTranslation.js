"use client"
import translationEN from '../../../messages/en.json'
import translationAR from '../../../messages/ar.json'
import { supported_locales } from './i18n_config'

const useTranslation = (locale) => {
    if (locale === supported_locales[1]) {
        return translationAR
    }
    return translationEN
}

export default useTranslation