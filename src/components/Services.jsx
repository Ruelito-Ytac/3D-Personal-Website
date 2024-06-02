import React from "react";
import "./Services.scss";

const Services = () => {
    return (
        <section id="services_wrapper">
            <div className="container">
                <h2><span>SERVICES</span>What I Am Great At </h2>

                <div id="services_list">
                    <div className="services_item">
                        <div className="services_details">
                            <img src="https://ucarecdn.com/78eee72f-fdd0-4290-bdb4-106e42e41c83/UIUX_icon.svg" alt="UI/UX Design Icon" />
                            <h3>UI/UX Design <span>15 Projects</span></h3>
                        </div>
                        <h5>5+ <span>Years of Experience</span></h5>
                    </div>
                    <div className="services_item">
                        <div className="services_details">
                            <img src="https://ucarecdn.com/74d4be95-d85e-4e4a-a26a-23d4b13eb393/Web_icon.svg" alt="UI/UX Design Icon" />
                            <h3>Web Development <span>28 Projects</span></h3>
                        </div>
                        <h5>20+ <span>Satisfied Customer</span></h5>
                    </div>
                    <div className="services_item">
                        <div className="services_details">
                            <img src="https://ucarecdn.com/8539bcba-08bb-4936-a404-326040c8c24a/Mobile_icon.svg" alt="UI/UX Design Icon" />
                            <h3>Mobile Development <span>6 Projects</span></h3>
                        </div>
                        <h5>16+ <span>Clients Served</span></h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
