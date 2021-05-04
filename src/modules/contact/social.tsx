import React from 'react'

interface ISocial{

}
const Social:React.FC<ISocial> = props =>{

    return(
        <>
            
            <div>
                <img className="contactMe" id = "contactMe" src="contact.png" width="300px" height="300px"/>
            </div>
            <div className = "contactus mt-4">
                <div className = "mt-2" >
                    <i className="mx-2 fas fa-phone-alt"></i>0805633940
                </div>
                <a href="mailto:darunporn.san@gmail.com">
                    <div className = "mt-2" >
                        <i className="mx-2 fas fa-inbox"></i>darunporn.san@gmail.com
                    </div>
                </a>  
                <a href="https://github.com/darunporn-san">
                    <div className = "mt-2" >
                        <i className="mx-2 fab fa-github"></i>darunporn-san
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/darunporn-santisawaddiwong-4a0721128/">
                    <div className = "mt-2" >
                        <i className="mx-2 fab fa-linkedin"></i>Darunporn Santisawaddiwong
                    </div>
                </a>
               
            </div>
            
        </>
    )
}
export default Social