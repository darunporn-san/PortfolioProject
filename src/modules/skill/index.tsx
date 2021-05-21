import React from 'react'
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import Card from './card'
interface ISkill{

}
const Skill:React.FC<ISkill> = props =>{
    const { t } = useTranslation();
	const [listCanDo, setListCanDo] = useState(false);
	const [listLearning, setListLearning] = useState(false);

	const handleDisplay = (list: any) => {
		if (list === "cando") {
			setListCanDo(false);
		}
		if (list === "learning") {
			setListLearning(false);
		}
	};

	const handleGrid = (list: any) => {
		if (list === "cando") {
			setListCanDo(true);
		}
		if (list === "learning") {
			setListLearning(true);
		}
	};
    return (
			<>
				<div className="header_menu text-center">{t("menu_skill")}</div>
				<div className="row card_skill_home">
					<Card
						id="cando"
						name="I can do it"
						data={ICanDoIt}
						handleDisplay={handleDisplay}
						handleGrid={handleGrid}
						list={listCanDo}
					/>
					<Card
						id="learning"
						name="I am learning"
						data={ILearning}
						handleDisplay={handleDisplay}
						handleGrid={handleGrid}
						list={listLearning}
					/>
				</div>
			</>
		);
}
export default Skill

const ICanDoIt = [
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
];

const ILearning = [
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
	{
		name: "bootstrap",
		icon: "bootstap.png",
	},
];