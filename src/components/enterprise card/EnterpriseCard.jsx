import React from 'react'
import './EnterpriseCard.scss'
import { FaLocationDot } from "react-icons/fa6";

import ProgressBar from "@ramonak/react-progress-bar";
import routes from '../../data/routes.json'

function EnterpriseCard({enterpriseData, setPage, setUserId}) {

  const goToProfile = () => {
    setUserId(enterpriseData.userId)
    setPage(routes.enterpriseAsInvestor)
  }
  
  return (
    <div className='enterprise-card'>
        <div className='col1'>
            <img src={enterpriseData.profileImage} alt="pfp"/>
            <div className='ranges-container'>
              <div className='goal'><p className='subtitle'>Goal:</p><p className='numbers'>US${enterpriseData.totalCollected}</p></div>
              <div className='minimum'><p className='subtitle'>Min invest:</p><p className='numbers'>US${enterpriseData.minimumInvestment}</p></div>
            </div>
            <div className="progrss-bar">
                <ProgressBar completed={Math.round((enterpriseData.totalCollected/enterpriseData.goal)*100)} bgColor="#3BAFB7" width={'90%'}/>
            </div>
        </div>
        <div className='col2'>
            <h2>{enterpriseData.name[0].toUpperCase() + enterpriseData.name.slice(1)}</h2>
            <p className='description'>{enterpriseData.description}</p>
            <div className='location-container'>
              <FaLocationDot color='rgba(0, 0, 0, 0.548)'/>
              <p className='location'>{enterpriseData.location[0].toUpperCase() + enterpriseData.location.slice(1)}</p>
            </div>
            <button onClick={goToProfile}>View proyect</button>
        </div>
    </div>
  )
}

export default EnterpriseCard