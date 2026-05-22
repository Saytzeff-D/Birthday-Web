import React, { useState } from "react";
import Tolu from '../assets/happy-birth-tolu.png'
import { Dialog, DialogContent } from "@mui/material";
import Flower from '../assets/flower.png'
import { useNavigate } from "react-router-dom";

const ToluBirthday = ()=>{
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(!open);
    return (
        <div className="container-fluid happy-birthday text-white" data-aos="fade">            
            <div className="container">                
                <div className="row w-100 p-md-5 px-2 pt-4">
                    <div className="col-md-6 my-2">
                        <p className="text-danger satisfy-regular fs-4" data-aos="fade-down">
                            Happy Birthday, Toluwanimi 🎉
                        </p>
                        <img src={Tolu} className="img-fluid" data-aos="fade-right" />
                    </div>                    
                    <div className="col-md-6 my-2">
                        <p className="text-white text-justify" data-aos="fade">
                            As you celebrate another year today, I wish you nothing but the very best life has to offer. Your birthday is always a special occasion I look forward to because it reminds me of how truly wonderful you are. It is also a time for me to reflect on your growth, not only as a professional, but also as a woman of faith and purpose. 
                        </p>
                        <p className="text-white text-justify" data-aos="fade">
                            You are the kind of friend everyone needs in their corner; supportive, progressive, radiant, and genuinely kind. It has been beautiful watching you grow, evolve, and continue to make meaningful progress in every area of your life.
                        </p> 
                        <p className="text-white text-justify" data-aos="fade">
                            Thank you for being you, 
                        </p>
                        <p className="text-white text-justify" data-aos="fade">
                            Thank you for being the “Yemi” in my Adeyemi 
                        </p>
                        <p className="text-white text-justify" data-aos="fade">
                            Thank you for being the best person to raise a Godly home with. 
                        </p>
                        <p className="text-white text-justify" data-aos="fade">
                            I love you today, tomorrow and forever 
                        </p>
                        <p className="text-white text-justify" data-aos="fade">
                            Teminikan Omo Baba Adejubee 
                        </p>   
                        <div className="d-flex justify-content-between">
                            <div>
                                <button className="btn btn-danger px-5 text-dark fw-bold" onClick={handleClose}>
                                    Press Me
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-purple rounded-circle py-3" onClick={()=>navigate('/birthday-video')}>
                                    Click
                                </button>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="xs"                
            >
                <DialogContent className="p-5 bg-warning">
                    <div className="small">
                        <p className="my-0">
                            As rivers flow gently day by day, 
                        </p>
                        <p className="my-0">
                            And seasons fade then find their way, 
                        </p>
                        <p className="my-0">
                            Life keeps changing, time moves on, 
                        </p>
                        <p className="my-0">
                            Yet you grow brighter with every dawn.
                        </p>
                        <p className="my-0">
                            With every season that passes through, 
                        </p>
                        <p className="my-0">
                            A stronger, better version emerges in you.
                        </p>
                        <p className="my-0">
                            Gracefully rising year after year, 
                        </p>
                        <p className="my-0">
                            Becoming more admirable, sincere, and rare.
                        </p>
                        <p className="my-0">
                            You are a gem not easily found, 
                        </p>
                        <p className="my-0">
                            A precious soul with beauty profound. 
                        </p>
                        <p className="my-0">
                            You blossom like trees by the riverside, 
                        </p>
                        <p className="my-0">
                            Flourishing with strength, purpose, and pride.
                        </p>
                        <p className="my-0">
                            You shine like stars across the night, 
                        </p>
                        <p className="my-0">
                            And sparkle like diamonds glowing with light.
                        </p>
                        <p className="my-0">
                            And sparkle like diamonds glowing with light.
                        </p>
                        <p className="my-0">
                            A heart so radiant, calm, and true, 
                        </p>
                        <p className="my-0">
                            The world becomes brighter because of you.
                        </p>
                        <div className="d-flex justify-content-center mt-2">
                            <img className="" width='50px' height='50px' alt="Tolu's Birthday" src={Flower} />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>   
        </div>
    );
};

export default ToluBirthday;