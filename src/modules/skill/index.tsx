import React from 'react'
import { useTranslation } from 'react-i18next';

interface ISkill{

}
const Skill:React.FC<ISkill> = props =>{
    const { t } = useTranslation();

    return(
        <>
            {t('menu_skill')}
        </>
    )
}
export default Skill