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
          "education_header" :  "Education Experience",
          "profile":{
            "firstname":"Darunporn",
            "lastname":"Santisawaddiwong" ,
            "sex":"female",
            "age":"26 years",
            "birthday_name":"Birthday",
            "birthday":"30/01/1995"
          },
          "education":{
            "gpa_name":"GPA",
            "stepOne":{
              "university":"Mahidol University",
              "faculty":"Faculty of Information and Communication Technology, Bachelor of Science (Multimedia)",
              "date":"August 2013 - August 2018",
              "detail":"I studied in Multimedia track.I learned about AR, VR, animation that it is up-to-date in present.I try using VR headset,leapmotion and kinect in project."
            },
            "stepTwo":{
              "contest":"NSC contest 2017",
              "title":"Healthcare, Healthtech, EKG, Medical Record , IOT",
              "detail":"My group sent 'Amaze Biosign' proposal to succeed in the first-round match which is created application for measuring heart rate using IONIC platform."
            },
            "stepThree":{
              "school":"Wichienmatu School",
              "mathayom":"Science-Math(SMA)",
              "date":'May 2007 - May 2013',
              "detail":"I studied in SMT or science-mathematic syllabus that specify in science experiment and join with another school in same syllabus."
            }
            
          },
          "work":{
            "position":"Frontend Developer",
            "stepOne":{
              "office":"Softnix Technology",
              "date":"27 May 2019 - Present",
              "detail":"I am responsibility for design user-friendly website and develop in frontend of website using react, typescript, redux and wordpress."
            },
            "stepTwo":{
              "title":"Training 'Psychology and UX'",
              "date":"22 September 2019",
              "detail":"I learn about psychology principles that can be applied in designing digital products to match the User Experience (UX) and attract users to become a habit."
            },
            "stepThree":{
              "office":"2B simple",
              "date":"7 October 2018 - 1 April 2019",
              "detail":"I am responsibility for develop in frontend of website using angular, wordpress and starting to learning in react.I design many prototype websites."
            }
            
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
            "gpa_name":"เกรด",
            "stepOne":{
              "university":"มหาวิทยาลัยมหิดล",
              "faculty":"คณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาสื่อระบบผสม",
              "date":"August 2013 - August 2018"
            },
            "stepTwo":{
              "contest":"NSC contest 2017",
              "title":"ดูแลสุขภาพ, เทคโนโลยีสุขภาพ, การวัดอัตราคลื่นไฟฟ้าหัวใจ, เทคโนโลยีอินเตอร์เน็ตที่เชื่อมต่อกับอุปกรณ์ต่างๆ"
            },
            "stepThree":{
              "school":"โรงเรียนวิเชียรมาตุ",
              "mathayom":"วิทย์-คณิต (สสวท.)",
              "date":'May 2007 - May 2013'
            }
            
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