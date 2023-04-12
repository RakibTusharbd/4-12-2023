import React from 'react';
import './Netflix.css'
import { FaSearchDollar,FaNetworkWired,FaPhoneAlt,FaReadme,FaGg } from "react-icons/fa";

const Netflix = () => {
    return (
              <div className='microsoft'>
            <div className="micro-text">
                <p><strong>Job Description:</strong> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating <br /> engaging and effective interfaces for software and web applications. This includes designing the layout, visual <br /> design, and interactivity of the user interface</p>
                <p><strong>Job Responsibility:</strong> Collaborating with cross-functional teams:  UI/UX designers often work closely with other teams, <br /> including product management, engineering, and marketing, to ensure that the user interface is aligned with <br /> business and technical requirements. You will need to be able to effectively communicate your design ideas and <br /> gather feedback from other team members.</p>
                <h3>Educational Requirements:</h3>
                <p>Bachelor degree to complete any reputational university.</p>
                <h3>Experiences:</h3>
                <p>2-3 Years in this field.</p>
            </div>
            <div className="micro-info">
                <h4>Job Details</h4>
                <div className="div-1"></div>
                <div className="new">
                    <p><span><FaSearchDollar/></span> <strong>Salary:</strong> 100K - 150K (Per Month)</p>
                    <p><span><FaNetworkWired/></span> <strong>Job Title ::</strong>  Product Designer</p>
                </div>
                <h4>Contact Information</h4>
                <div className="div-2"></div>
                <div className="contact">
                <p><span><FaPhoneAlt/></span> <strong>Phone:</strong> 01750-00 00 00</p>
                <p><span><FaReadme/></span> <strong>Emial:</strong> info@gmail.com</p>
                <p><span><FaGg/></span> <strong>Adress:</strong> Dhanmondi 32, Sukrabad <br />
                Dhaka, Bangladesh</p>
                </div>
                <button className='apply'>Apply Now</button>
            </div>
        </div>
    );
};

export default Netflix;