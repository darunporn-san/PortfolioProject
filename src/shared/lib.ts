import i18n from "i18next"
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
          "menu_home": "Home",
          "menu_about": "About",
          "menu_skill": "Skill",
          "menu_expirence": "Expirence",
          "menu_contact": "Contact us",
          "address_header":"Address",
          "address":"1028 Chodsathidtham apartment, Hemwong 1, Dindaeng, Dindaeng, Bangkok 10400"
        }
    },
    th: {
        translation: {
          "menu_home": "หน้าแรก",
          "menu_about": "เกี่ยวกับฉัน",
          "menu_skill": "ทักษะ",
          "menu_expirence": "ประสบการณ์",
          "menu_contact": "ติดต่อเรา",
          "address_header":"ที่อยู่",
          "address":"1028 โชติสถิตธรรมอพาร์ทเมนท์ ซ.เหมวงศ์ 1 แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400"
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en"
})

export default i18n;