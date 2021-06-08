import React from 'react'
import { useTranslation } from 'react-i18next';
import Social from './social'
import Map from './map'
interface IContact{

}
const Contact:React.FC<IContact> = props =>{
    const { t } = useTranslation();

    return(
        <>
            <div className="contacts">
                <div className="my-3 text-uppercase header">
                    {t('menu_contact')}
                </div>
                <div className="contact_details row">
                    <div className="col-sm text-center" style={{margin:'auto'}}>
                        <Social/>
                    </div>
                    <div className="col-sm text-center">
                        <Map/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact