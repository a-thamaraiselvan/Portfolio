import './Loader.css'
import dsce from '../Loader/loader.png'


const Loader = () => {
    return (
        <>
            <div className='Loader'>
                <div className='Loader-Eff'></div>
                <div className='img-loader'>
                    <img src={dsce} alt='loder'></img>
                </div>
                <div className="loaders">
                    <div className="loader-right"></div>
                    <div className="loader-left"></div>
                </div>
            </div>
        </>
    )
}

export default Loader
