import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next';

interface IHomePage{

}
const HomePage:React.FC<WithTranslation> = props =>{
    return(
        <>
            Home
        </>
    )
}
export default withTranslation()(HomePage)