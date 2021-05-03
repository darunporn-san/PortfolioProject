import React from 'react'
import { useTranslation } from 'react-i18next';

interface IContact{

}
const Contact:React.FC<IContact> = props =>{
    const { t } = useTranslation();

    return(
        <>
            {t('menu_contact')}
        </>
    )
}
export default Contact