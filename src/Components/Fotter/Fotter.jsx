import React from 'react';
import './Fotter.css'

const Fotter = () => {
    return (
        <div className='fotter'>
            <div className="carear">
                <h2>CareerHub</h2>
                <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                <div className="ik">
                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" />
                </div>
            </div>
            <div className="compa">
                <h2>Company</h2>
                <p>About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>
            </div>
            <div className="prod">
                <h2>Product</h2>
                <p>Prototype</p>
                <p>Plans & Pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div className="k">
                <h2>Support</h2>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a Partner</p>
                <p>Developers</p>
            </div>
            <div className="kuddus">
                <h2>Contact</h2>
                <p>524 Broadway , NYC</p>
                <p>+ +1 777 - 978 - 5570</p>
            </div>
        </div>
    );
};

export default Fotter;