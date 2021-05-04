import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';


interface IHomePage{

}
const HomePage:React.FC<WithTranslation> = props =>{
    const { t } = useTranslation();    
    return(
        <div>
            {t('menu_home')}
        </div>
    )
}
export default withTranslation()(HomePage)