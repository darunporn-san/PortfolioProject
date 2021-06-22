import React from 'react'
import { useTranslation } from 'react-i18next';
import {useState,useEffect} from 'react'
interface IExpirence{

}

const opts = [
	{
	  name: 'Hamburgers',
	  value: 'ham',
	},
	{
	  name: 'Hotdogs',
	  value: 'hot',
	  background: '#e75252', // optional
	},
	{
	  name: 'Salads',
	  value: 'sal',
	  background: '#2e8e65', // optional
	},
  ];
  const fontStyling = {
	textTransform: 'uppercase',
	fontWeight: 'bold',
	fontSize: '3.5vw',
	letterSpacing: '0.05em',
	fontFamily: 'Bebas Neue, sans-serif',
  };

const Expirence:React.FC<IExpirence> = props =>{
    const { t } = useTranslation();
	const [selected, setSelected] = useState(false);
    console.log('selected',selected);
    
    return (
			<>
                    <div className="header_menu text-center">{selected?t("education_header"):t("work_header")}</div>
                    <div className = "row"style ={{position:'absolute',top:'3vh',right:'2vw'}}>
						<div className ="menuExperience">
							<i
					className="material-icons mx-3"
					style={{ verticalAlign: "top", fontSize: "48px" ,cursor:"pointer"}}
                    onClick={()=>setSelected(true)}>
					school
				</i>
				<span>education</span>
						</div>
                    <div className ="menuWork">
						<i
					className="material-icons mx-3"
					style={{ verticalAlign: "top", fontSize: "48px" ,cursor:"pointer"}}
                    onClick={()=>setSelected(false)}>
					work
				</i>          
				<span>work</span>

					</div>

                          </div>
				{
                    !selected?<WorkExperience/>:<EducationExperience/>
                }
				
			</>
		);
}
export default Expirence

const WorkExperience = () =>{
    const { t } = useTranslation();

    return (
			<>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="main-timeline">
								<a href="#" className="timeline">
									<div
										className="timeline-icon"
										style={{ padding: "17px 5px" }}>
										<img
											className="logo"
											src="/softnix-google.png"
											style={{ width: "120px", height: "90px" }}
										/>
									</div>
									<div className="timeline-content">
										<h3 className="title">{t('work.stepOne.office')} ({t('work.position')})</h3>
										<p className="description">{t('work.stepOne.date')}</p>
										<hr className="mt-0" />
										<p className="description">{t('work.stepOne.detail')}</p>
									</div>
								</a>
								<a href="#" className="timeline">
									<div className="timeline-icon">
										<i
											className="material-icons"
											style={{ verticalAlign: "top", fontSize: "80px" }}>
											psychology
										</i>
									</div>
									<div className="timeline-content">
										<h3 className="title">{t('work.stepTwo.title')}</h3>
										<p className="description">{t('work.stepTwo.date')}</p>
										<hr className="mt-0" />
										<p className="description">{t('work.stepTwo.detail')}</p>
									</div>
								</a>
								<a href="#" className="timeline">
									<div className="timeline-icon">
										<i
											className="material-icons"
											style={{ verticalAlign: "top", fontSize: "70px" }}>
											devices
										</i>{" "}
									</div>
									<div className="timeline-content">
										<h3 className="title">{t('work.stepThree.office')} ({t('work.position')})</h3>
										<p className="description">{t('work.stepThree.date')}</p>

										<hr className="mt-0" />
										<p className="description">{t('work.stepThree.detail')}
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}


const EducationExperience = () =>{
    const { t } = useTranslation();

    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><img className="logo" src="/mahidol.png" style={{width:'100px',height:'100px'}}/></div>
                            <div className="timeline-content">
                                <h3 className="title">{t('education.stepOne.university')} , {t('education.gpa_name')} : 2.96</h3>
                                <p className="description">{t('education.stepOne.faculty')}</p>
                                <hr className="mt-0"/> 
                                <p className="description">{t('education.stepOne.detail')}</p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><img className="logo" src="/nsc.png" style={{width:'100px',height:'100px'}}/></div>
                            <div className="timeline-content">
                                <h3 className="title">{t('education.stepTwo.contest')}</h3>
                                <p className="description">{t('education.stepTwo.title')}</p>
                                <hr className="mt-0"/>
                                <p className="description">{t('education.stepTwo.detail')}</p>

                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><img className="logo" src="/wch.png" style={{width:'100px',height:'100px'}}/></div>
                            <div className="timeline-content">
                                <h3 className="title">{t('education.stepThree.school')} , {t('education.gpa_name')} : 3.62</h3>
                                <p className="description">{t('education.stepThree.mathayom')}</p>
                                <hr className="mt-0"/>
                                <p className="description">{t('education.stepThree.detail')}</p>

                            </div>
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}