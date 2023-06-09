import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://the-news-dragon-server-webprosen.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, []);

    return (
        <div className='mt-4'>
            <h4 className='mb-2'>All category</h4>
            <div className='ps-3'>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;