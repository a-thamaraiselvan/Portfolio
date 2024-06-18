import underline from '../../assets/theme_pattern.svg'
import './Certificate.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificate_data from '../../assets/certificate';

const Certificate = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // initialSlide: 2,
        responsive: [{
            breakpoint: 678,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
            }
        }]
    };
    return (
        <>


            <div className="certificate">
                <div className="certificate-title">
                    <h1>Certificate</h1>
                    <img src={underline} alt="" />
                </div>
                <div className="certificate-container">
                    <Slider {...settings}>
                        {
                            certificate_data.map((certificate, index) => {

                                return <div className='certificate-img' key={index}>
                                    <img src={certificate.c_img} alt="" />
                                    <div className="certificate-details">
                                        <h1>{certificate.c_name}</h1>
                                        <p>{certificate.c_des}</p>
                                    </div>
                                </div>

                            })

                        }

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Certificate
