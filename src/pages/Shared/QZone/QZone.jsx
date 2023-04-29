import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import './QZone.css'

const QZone = () => {
    return (
        <div className='q-zone bg-secondary p-3'>
            <h4>QZone</h4>
            <img src={qZone1} />
            <img src={qZone2} />
            <img src={qZone3} />
        </div>
    );
};

export default QZone;