import React from 'react'
import { useTranslation } from 'react-i18next';

interface IMap{

}
const Map:React.FC<IMap> = props =>{
    const { t } = useTranslation();

    return(
        <>
            <div className="address">
                <div className="mt-2">{t('address_header')} : {t('address')}</div>
            </div>
            <div className="mapImage">
                <img className="maps" id = "maps" src="map.png"/>
            </div>
        </>
    )
}
export default Map