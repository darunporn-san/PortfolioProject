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

const ILearning = [
	{
		name: "fast api",
		icon: "/skill/learn/fastapi.png",
	},
	{
		name: "golang",
		icon: "/skill/learn/golang.png",
	},
	{
		name: "mongodb",
		icon: "/skill/learn/mongodb.png",
	},
	{
		name: "python",
		icon: "/skill/learn/python.svg",
	},
];

const ICanDoIt = [
	{
		name: "html",
		icon: "/skill/cando/html5.png",
	},
	{
		name: "css",
		icon: "/skill/cando/css.png",
	},
	{
		name: "javascript",
		icon: "/skill/cando/javascript.png",
	},
	{
		name: "react",
		icon: "/skill/cando/react.png",
	},
	{
		name: "typescript",
		icon: "/skill/cando/typescript.png",
	},
	{
		name: "nextjs",
		icon: "/skill/cando/nextjs.png",
	},
	{
		name: "redux",
		icon: "/skill/cando/redux.png",
	},
	{
		name: "wordpress",
		icon: "/skill/cando/wordpress.png",
	},
	{
		name: "bootstrap",
		icon: "/skill/cando/bootstap.png",
	},
	{
		name: "git",
		icon: "/skill/cando/git.png",
	},
	{
		name: "firebase",
		icon: "/skill/cando/firebase.png",
	},
	{
		name: "heroku",
		icon: "/skill/cando/heroku.png",
	},
	{
		name: "ionic",
		icon: "/skill/cando/ionic.png",
	},
	
];