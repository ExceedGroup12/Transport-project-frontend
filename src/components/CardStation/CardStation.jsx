import React from 'react';
import './card-station.scss';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';

const CardStation = ({ station }) => {
  return (
    <Link to={`/${station.split(' ')[1]}/detail`} className='station-btn'>
      <span>{station}</span>
      <CgArrowLongRight />
    </Link>
  );
};

export default CardStation;
