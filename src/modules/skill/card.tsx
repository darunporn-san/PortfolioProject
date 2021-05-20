import React from "react";
import { useTranslation } from "react-i18next";

interface ICard {
	name: string;
}
const Card: React.FC<ICard> = (props) => {
	const { t } = useTranslation();

	return (
		<>
			<div className="card_skill">
				<div className="card_ui">
					<div className="ui_card_skill ">
						<div className="mt-2 ml-2 mr-4 d-flex justify-content-between">
							<div>
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
							<div>
								<i
									className="material-icons mr-1"
									style={{
										verticalAlign: "top",
										fontSize: "16px",
										color: "#75e8e7",
									}}>
									list
								</i>
								<i
									className="material-icons"
									style={{
										verticalAlign: "top",
										fontSize: "16px",
										color: "#75e8e7",
									}}>
									view_module
								</i>
							</div>
							<div style={{ color: "white" }}>{props.name}</div>
						</div>
						<div>{props.children}</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Card;
