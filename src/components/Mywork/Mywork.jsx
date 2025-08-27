/* eslint-disable no-unused-vars */
import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
// import certificate from '../../assets/certificate'

const Mywork = () => {

  
    return (
        <>
            <div className="mywork" id='work'>
                <div className="mywork-title">
                    <h1>Projects</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="mywork-container">
                    {
                        mywork_data.map((work, index) => {
                            return (
                                <>
                                    <div className='mywork-details'>
                                        <img src={work.w_img} key={index} />
                                        <div className="mywork-overlay">
                                            <h1>{work.w_name}</h1>
                                            <p>{work.w_des}</p>
                                            <a href={work.w_link} target="_blank"> <button>Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </button></a>
                                         
                                        </div>
                                    </div>

                                </>

                            )
                        })
                    }
                </div>
                {/* <div className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div> */}
            </div>
        </>
    )
}

export default Mywork
