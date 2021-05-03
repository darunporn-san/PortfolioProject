import React from 'react'
import { useTranslation } from 'react-i18next';

interface IExpirence{

}
const Expirence:React.FC<IExpirence> = props =>{
    const { t } = useTranslation();

    return(
        <>
            {t('menu_expirence')}
        </>
    )
}
export default Expirence