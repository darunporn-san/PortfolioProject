import React from 'react'
import {
    useEffect 
} from 'react'
import { withTranslation, WithTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';


interface IHomePage{

}
const HomePage:React.FC<WithTranslation> = props =>{
    const { t } = useTranslation();    
    var div = document.getElementById('sidebar')
    let image = document.getElementById('iconHomePage')

    if(div !== null){
        div.addEventListener("mouseover", function( event ) {
            // image!.style.width = '250px'
            // image!.style.height = '250px'
            // document.getElementById('iconHomePage')!.style.width = "7vw";
            document.getElementById('iconHomePage')!.style.transform = "translate(45%, -50%)";
        });

          div.addEventListener("mouseout", function( event ) {
            // image!.style.width = '300px'
            // image!.style.height = '300px'
            // document.getElementById('iconHomePage')!.style.width = "10vw";

            document.getElementById('iconHomePage')!.style.transform = "translate(-30%, -50%)";
          });
    }
 
    return (
			<>
				<div className="row homepage" id="homepage">
					<div className="col helloHome" id="helloHome">
						<label>{t("hello")}</label>
						<div className="iconHome">
							<a href="https://github.com/darunporn-san" target="_blank">
								<img src="GitHub-Mark-64px.png" width="50px" height="50px" />
							</a>
							<a
								href="https://www.linkedin.com/in/darunporn-santisawaddiwong-4a0721128/"
								target="_blank">
								<img src="linkedin.png" width="60px" height="60px" />
							</a>
						</div>
					</div>
					<div className='iconHomePage' id = 'iconHomePage'>
						<div className="text-center allIcon">
						</div>
						

					
					
					

					</div>
					{/* <div className="imageHome" id="imageHome">
						<img src="homepic.jpg" id="imgHome" />
					</div> */}
					<div className="col introduce text-right my-auto pr-5">
						<div
							className="d-flex align-items-end flex-column" style={{height:'90vh'}}>
								<div className="imageHome" id="imageHome">
						<img src="homepic.jpg" id="imgHome" />
					</div>
							<div className="fullname">
								{t("profile.firstname")}
								<br />
								{t("profile.lastname")}
							</div>
							<div className="mt-auto positions text-center">
								<h1>&#123; {t("work_details.position")} &#125; </h1>
							</div>
						</div>
					</div>
				</div>
				{/* {t('menu_home')} */}
			</>
		);
}
export default withTranslation()(HomePage)