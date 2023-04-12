import React from 'react';

const Item = () => {
    const [item,setItems] = useState([]);
    useEffect(() => {
        fetch('Item.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
             <div className="tushar">
                <h2>Job Category List:{item.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>
    );
};

export default Item;