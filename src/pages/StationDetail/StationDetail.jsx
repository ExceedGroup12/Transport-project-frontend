import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './station-detial.scss';
import { getStationById } from '../../service/station';

const stationTags = [
  { name: '1', tag: 'red' },
  { name: '2', tag: 'blue' },
  { name: '3', tag: 'green' },
  { name: '4', tag: 'yellow' },
];

export default function StationDetail() {
  const [stationData, setStationData] = useState();
  const { station } = useParams();
  const currentStation = stationTags.find((s) => s.name === station);

  const onGetStationById = async (id) => {
    getStationById(id).then((response) => {
      setStationData(response);
    });
  };

  useEffect(() => {
    onGetStationById(currentStation.name);
  }, [currentStation.name]);

  return (
    <div className='station-detail__container'>
      <div className='station-detail__content'>
        <div className='station-detail__header'>
          <div
            className='tags'
            style={{ backgroundColor: currentStation.tag }}
          ></div>
          <h1>Station {currentStation.name}</h1>
        </div>
        {stationData && (
          <div className='station-detail__body'>
            <h2>
              Station Name: <span>{stationData.name}</span>
            </h2>
            <h2>
              Station Description: <span>{stationData.description}</span>
            </h2>
          </div>
        )}
      </div>
      <Link to='/'>
        <button className='back-btn'>back</button>
      </Link>
    </div>
  );
}
