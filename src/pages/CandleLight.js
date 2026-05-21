import React from "react";
import ImgLight from '../assets/fire-beauty.gif'
import { useNavigate } from "react-router-dom";

const CandleLight = ()=>{
    const navigate = useNavigate()
    return (
        <div className="container-fluid candle-light text-white vh-100" data-aos="fade">            
            <div className="container p-5">
                <div className="row w-100">
                    <div className="col-md-5">
                        <img onClick={()=>navigate('/happy-birthday')} src={ImgLight} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <p className="display-1 pt-5 pacifico-regular">
                            The candle is lighted, <br/>blow it off!
                        </p>
                        <p>
                            Click on the the light
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandleLight;