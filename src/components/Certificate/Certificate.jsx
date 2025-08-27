import underline from '../../assets/theme_pattern.svg'
import './Certificate.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificate_data from '../../assets/certificate';

const Certificate = () => {

    return (
        <>


             <div className="certificate" id='certificate'>
                <div className="certificate-title">
                    <h1>certificate</h1>
                    <img src={underline} alt="" />
                </div>
                <div className="certificate-container">
                    {
                        certificate_data.map((certificate, index) => {
                            return (
                                <>
                                    <div className='certificate-details'>
                                        <img src={certificate.c_img} key={index} />
                                        <div className='certificate-overlay'>
                                            <h1>{certificate.c_name}</h1>
                                            <p>{certificate.c_des}</p>
                                            {/* <button>Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </button> */}
                                         
                                        </div>
                                    </div>

                                </>

                            )
                        })
                    }
                </div>
                {/* <div className="certificate-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div> */}
            </div>
        </>
    )
}

export default Certificate
