import React from "react";
import { useTranslation } from "react-i18next";
import classnames from 'classnames'

interface ICard {
	id?:string
	name: string;
	data?: any[];
	handleDisplay?:(selected:any)=>void
	handleGrid?:(selected:any)=>void
	list:boolean
}
const Card: React.FC<ICard> = (props) => {
	const { t } = useTranslation();
	console.log(props);
	
	return (
		<>
			<div className="card_skill">
				<div className="card_ui">
					<div className="ui_card_skill ">
						<div className="mt-2 ml-2 mr-4 d-flex justify-content-between">
							<div className="icon_card">
								<i
									className="material-icons mr-1"
									style={{
										verticalAlign: "top",
										fontSize: "16px",
										color: "#FF5F56",
									}}>
									circle
								</i>
								<i
									className="material-icons mr-1"
									style={{
										verticalAlign: "top",
										fontSize: "16px",
										color: "#FFBD2D",
									}}>
									circle
								</i>
								<i
									className="material-icons"
									style={{
										verticalAlign: "top",
										fontSize: "16px",
										color: "#26C940",
									}}>
									circle
								</i>
							</div>
							<div className="icon_card list">
								<i
									className="list_select material-icons px-1"
									onClick={props.handleDisplay?.bind(this,props.id)}
									style={!props.list?{backgroundColor:'#798B9E'}:undefined}

								>
									list
								</i>
								<i
									className="list_select material-icons px-1"
									onClick={props.handleGrid?.bind(this,props.id)}
									style={props.list?{backgroundColor:'#798B9E'}:undefined}
									>
									view_module
								</i>
							</div>
							<div style={{ color: "white" }}>{props.name}</div>
						</div>
						<div className="details_skill mt-4"><div className={props.list?'mx-3':''}>{props.data?.map((items:any,key:number)=>{
							if(props.list){
								return <GridItem icon={items.icon} name={items.name}/>
							}else{
								return <ListItem icon={items.icon} name={items.name}/>
							}
						})}</div></div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Card;

interface IListItem{
	icon:string
	name:string
}

const ListItem:React.FC<IListItem> = (props:any) =>{
	return (
		<>
			<div className="d-flex justify-content-between mx-5">
				<img src={props.icon} id="imgHome"  width="50px" height="50px"/>
				<p>{props.name}</p>
			</div>
		</>
	)

}


const GridItem:React.FC<IListItem> = (props:any) =>{
	return (
		<>
			{/* <div className="d-flex align-items-start"> */}
				<img src={props.icon} id="imgHome"  width="100px" height="100px"/>
			{/* </div> */}
		</>
	)

}


