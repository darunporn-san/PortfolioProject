import i18n from "i18next"
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
          "menu_home": "Home",
          "menu_about": "About",
          "menu_skill": "Skill",
          "menu_expirence": "Expirence",
          "menu_contact": "Contact"
        }
    },
    th: {
        translation: {
          "menu_home": "หน้าแรก",
          "menu_about": "เกี่ยวกับฉัน",
          "menu_skill": "ทักษะ",
          "menu_expirence": "ประสบการณ์",
          "menu_contact": "การติดต่อ"
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en"
})

export default i18n;