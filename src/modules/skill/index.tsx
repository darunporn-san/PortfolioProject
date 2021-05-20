import React from 'react'
import { useTranslation } from 'react-i18next';
import Card from './card'
interface ISkill{

}
const Skill:React.FC<ISkill> = props =>{
    const { t } = useTranslation();

    return (
			<>
				<div className="header_menu text-center">{t("menu_skill")}</div>
                <div className="row"><Card name = "I can do it"/><Card name = "I am learning"/></div>
			</>
		);
}
export default Skill