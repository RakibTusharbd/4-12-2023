import React from 'react';
import './Gnagor.css'



const Gngor = (props) => {

    const {picture,name,company,pages} = props.pran;
    return (
        <div className='gang'>
            <img src={picture} alt="" />
           <div className="petok">
           <h4 className='shop-name'>{name}</h4>
           <h5 className='tok'>{company}</h5>
           <div className="bt">
            <button>Remote</button>
            <button>Full Time</button>
           </div>
           <div>
            <a href={pages}>
              <button className='vi'>View Details</button>
            </a>
          </div>
           </div>
           {/* <div className="imran">
           </div> */}
        </div>
    );
};
export default Gngor;