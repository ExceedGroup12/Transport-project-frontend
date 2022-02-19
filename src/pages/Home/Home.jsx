import { useState } from 'react';
import { SelectForm, CardStation } from '../../components';
import Map from '../../images/map.jpg';
import { CgArrowLongRight } from 'react-icons/cg';
import './home.scss';
import Modal from '../../components/Modal/Modal';
import { postStationData } from '../../service/station';
import { getToken } from '../../service/auth';

const options = [
  { value: 'Station 1' },
  { value: 'Station 2' },
  { value: 'Station 3' },
  { value: 'Station 4' },
];

export default function Home() {
  const [startStation, setStartStation] = useState();
  const [endStation, setEndStation] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [start, setStart] = useState(false);
  const jwtToken = getToken();

  const startMoving = (startStation, endStation) => {
    if (startStation === endStation) {
      return;
    }
    setModalOpen(true);
    if (startStation && endStation) {
      setStart(true);
    } else {
      setStart(false);
    }
    postStationData(startStation, endStation, jwtToken).then(() => {
      console.log('successfully');
    });
  };

  return (
    <div className='home__container'>
      <div className='map__container'>
        <img src={Map} alt='map' />
      </div>
      <div className='content__container'>
        <div className='station-detail'>
          <h2>Station Detail</h2>
          <div className='card-station__container'>
            <CardStation station={'Station 1'} />
            <CardStation station={'Station 2'} />
            <CardStation station={'Station 3'} />
            <CardStation station={'Station 4'} />
          </div>
        </div>
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
            <button
              onClick={() =>
                startMoving(
                  Number(startStation.split(' ')[1]),
                  Number(endStation.split(' ')[1])
                )
              }
            >
              <span>START</span>
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal
          start={start}
          startStation={startStation.split(' ')[1]}
          endStation={endStation.split(' ')[1]}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
}
