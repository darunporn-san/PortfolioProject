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
          "address":"1028 Chodsathidtham apartment, Hemwong 1, Dindaeng, Dindaeng, Bangkok 10400",
          "work_header": "Work Experience",
          "education_header" :  "Education",
          "profile":{
            "firstname":"Darunporn",
            "lastname":"Santisawaddiwong",
            "sex":"female",
            "age":"26 years",
            "birthday_name":"Birthday",
            "birthday":"30/01/1995"
          },
          "education":{
            "university":"Mahidol University",
            "faculty":"Information and Communi",
            "school":"Wichienmatu School",
            "mathayom":"Science-Math(SMA)",
            "gpa_name":"GPA"
          },
          "home":"I am Darunporn Santisawaddiwong - but call me 'Mint'.I am a frontend developer.",
          "work_details":{
            "position":"Frontend Developer",
            "first_office":"2Bsimple",
            "second_office":"Softnix Technology",
          },
          "hello":"<hello world/>"
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
          "address":"1028 โชติสถิตธรรมอพาร์ทเมนท์ ซ.เหมวงศ์ 1 แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
          "work_header": "ประสบการณ์ทำงาน",
          "education_header" :  "การศึกษา",
          "profile":{
            "firstname":"ดรัลพร",
            "lastname":"สันติสวัสดิวงศ์",
            "sex":"หญิง",
            "age":"26 ปี",
            "birthday_name":"วันเกิด",
            "birthday":"30/01/2538"
          },
          "education":{
            "university":"มหาวิทยาลัยมหิดล",
            "faculty":"คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
            "school":"โรงเรียนวิเชียรมาตุ",
            "mathayom":"วิทย์-คณิต",
            "gpa_name":"เกรด"
          },
          "home":"สวัสดี ฉันชื่อ",
          "work_details":{
            "position":"นักพัฒนาหน้าเว็บไซต์",
            "first_office":"ทูบีซิมเปิ้ล",
            "second_office":"ซอฟท์นิกซ์ เทคโนโลยี",
          },
          "hello":"สวัสดี"

        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en"
})

export default i18n;