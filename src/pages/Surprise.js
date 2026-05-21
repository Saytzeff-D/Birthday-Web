import React from "react";
import Tejubee from '../assets/surprise.gif.gif'
import { useNavigate } from "react-router-dom";

const Surprise = ()=>{
    const navigate = useNavigate()
    return (
        <div className="container-fluid candle-light text-white vh-100" data-aos="fade">            
            <div className="container p-5">
                <p className="pt-3 pb-5 fs-2">
                    TM.Adejubee
                </p>
                <div className="row w-100 pb-5">
                    <div className="col-md-5">
                        <img src={Tejubee} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <p className="display-3 pt-3 pacifico-regular">
                            Ready for a surprise?
                        </p>
                        <button onClick={()=>navigate('/candle-lighter')} className="btn btn-light btn-lg text-purple mt-4">
                            Ready? Let’s Go 🚀
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Surprise;