import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
          <h2>DreamProject</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/applaction">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <button className='btn'>Star Applying</button>
        </div>
    );
};

export default Header;