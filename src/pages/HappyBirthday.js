import React from "react";
import Cake from '../assets/birthday-cake.gif'
import BirthdayGirl from '../assets/happy-birthday.png'
import { useNavigate } from "react-router-dom";

const HappyBirthday = ()=>{
    const navigate = useNavigate()
    return (
        <div className="container-fluid happy-birthday text-white vh-100" data-aos="fade">            
            <div className="container">                
                <div className="row w-100 pb-5">
                    <div className="col-md-4 col-12 p-5">
                        <img src={Cake} className="img-fluid" />
                    </div>
                    <div className="col-md-3 pt-4 col-6 pt-md-0 pt-5">
                        <div className="d-flex justify-content-center mt-md-5 pt-md-5">
                            <div>
                                <button onClick={()=>navigate('/tolu-birthday')} className="btn btn-lg candle-light text-white fs-6 py-3 fw-bold">
                                    Happy Birthday🎉
                                </button>                
                                <p className="pt-3 fw-bold">
                                    Click the above
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-6 position-relative d-flex align-items-end justify-content-end p-0">
                        <img
                            src={BirthdayGirl}
                            alt="Birthday Girl"
                            className="birthday-girl img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyBirthday;