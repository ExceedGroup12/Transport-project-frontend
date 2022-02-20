import React, { useEffect, useState } from 'react';
import { GoPackage, GoLocation } from 'react-icons/go';
import { FaFlagCheckered } from 'react-icons/fa';
import Car from '../../images/car.png';
import './modal.scss';
import { getRobotStatus } from '../../service/station';
import axios from 'axios';

const Modal = ({ start, startStation, endStation, setModalOpen }) => {
  const [robotStatus, setRobotStatus] = useState();
  const [position, setPosition] = useState();

  const onGetRoBotStatus = () => {
    getRobotStatus()
      .then((res) => {
        setRobotStatus(res.message);
        console.log(res.message);
      })
      .then(() => {
        switch (robotStatus) {
          case `moving to pick up package location (station ${startStation})`:
            setPosition('30%');
            break;
          case 'Waiting for pacakage':
            setPosition('65%');
            break;
          case `moving to drop package location (station ${endStation})`:
            setPosition('100%');
            break;
          case `Reach the destination location (station ${endStation})`:
            setTimeout(() => {
              setModalOpen(false);
            }, 3000);
            break;
          default:
            break;
        }
      });
  };

  const continueMoving = () => {
    axios.post('https://ecourse.cpe.ku.ac.th/exceed12/api/send');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onGetRoBotStatus();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='title'>
          {start ? (
            <h1>
              Moving from Station {startStation} to Station {endStation}
            </h1>
          ) : (
            <h1>You have to choose a station first</h1>
          )}
          {robotStatus === 'Waiting for pacakage' && (
            <button className='continue-moving' onClick={continueMoving}>
              Continue
            </button>
          )}
        </div>
        {start && (
          <div className='body'>
            <span className='robot-status'>{robotStatus}</span>
            <div className='bar'>
              <div className='car' style={{ left: position }}>
                <img src={Car} alt='' />
              </div>
              <GoLocation className='start' />
              <GoPackage className='package' />
              <FaFlagCheckered className='end' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
