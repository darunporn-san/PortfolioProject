import React from 'react'
import { useTranslation } from 'react-i18next';

interface IAbout{

}
const About:React.FC<IAbout> = props =>{
    const { t } = useTranslation();

    return(
        <>
            {t('menu_about')}
        </>
    )
}
export default About