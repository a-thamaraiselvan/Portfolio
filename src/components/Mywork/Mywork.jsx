/* eslint-disable no-unused-vars */
import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import certificate from '../../assets/certificate'

const Mywork = () => {
    return (
        <>
            <div className="mywork" id='work'>
                <div className="mywork-title">
                    <h1>Certification</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="mywork-container">
                    {
                        certificate.map((certificate, index) => {
                            return (
                                <>
                                    <div className='mywork-details'>
                                        <img src={certificate.c_img} key={index} />
                                        <div className="mywork-overlay">
                                            <h1>{certificate.c_name}</h1>
                                            <p>{certificate.c_des}</p>
                                       
                                        </div>
                                    </div>

                                </>

                            )
                        })
                    }
                </div>
                <div className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        </>
    )
}

export default Mywork
