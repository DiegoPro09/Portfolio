import i18next from 'i18next';
import en from '../../translations/en/en.json';
import es from '../../translations/es/es.json';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            es:{
                global: es
              },
            en:{
                global: en
            }
        },
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18next