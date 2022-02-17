import { useState } from 'react';
import { SelectForm } from '../../components';
import Map from '../../images/map.png';
import { CgArrowLongRight } from 'react-icons/cg';
import './home.scss';

const options = [
  { value: 'Station 1' },
  { value: 'Station 2' },
  { value: 'Station 3' },
  { value: 'Station 4' },
];

export default function Home() {
  const [startStation, setStartStation] = useState();
  const [endStation, setEndStation] = useState();

  return (
    <div className='home__container'>
      <div className='map__container'>
        <img src={Map} alt='map' />
      </div>
      <div className='content__container'>
        <div className='select-form'>
          <div className='form'>
            <SelectForm
              stationLabel='Departure'
              options={options}
              station={startStation}
              setStation={setStartStation}
            />
            <SelectForm
              stationLabel='Destination'
              options={options}
              station={endStation}
              setStation={setEndStation}
            />
          </div>
          <div className='result__container'>
            <div className='selected-station'>
              <span>{!startStation ? 'Start' : startStation}</span>
              <CgArrowLongRight />
              <span>{!endStation ? 'End' : endStation}</span>
            </div>
            <button>
              <span>START</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
