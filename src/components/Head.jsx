import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import "./Responsive.css"
import "./Head1.css"


const Head = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return <div className='container'>
        <div className="head flex" >
            <div className="left flex1" data-aos="fade-right">
                <div className="temp">THE STAKES : REAL ESTATE ECOSYSTEM</div>
                <div className="heading">Futuristic in-store shopping experiences.</div>
                <p>Reinventing brick and mortar retail stores with futuristic in-store shopping experiences.</p>

                <ul className="flex ">
                    <li className="btn">🞂 &nbsp; Join our Waiting List</li>
                    <li className="btn">Contact US</li>
                </ul>

            </div>
            <div className="right flex1" data-aos="fade-left">
                <iframe title="SearchIn Video" width="420" height="345" src="https://youtu.be/wKHJDDGHnd0"></iframe>
            </div>
        </div>

        {/* <div><div className="heading2">
            <div className="temp">THE IMPACT : ACCELERATION, REMOTE, AMAZING</div>
            <div className="heading">We have empowered over 20K+ virtual <br /> site visits and inventory sales estimated <br /> to be +$25 million in last 18 months!</div>
            <p>Enabling virtual sales & showcase at over 60+ projects including those of</p>
        </div>
        <div>
            <ul className="logos flex justify-between">
                <li><img src={logo1} alt="" /></li>
                <li><img src={logo2} alt="" /></li>
                <li><img src={logo3} alt="" /></li>
                <li><img src={logo4} alt="" /></li>
                <li><img src={logo5} alt="" /></li>
                <li><img src={logo6} alt="" /></li>
            </ul>
        </div>
        </div> */}

    </div>;
};

export default Head;
