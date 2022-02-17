import './select-form.scss';

export default function Navbar({ stationLabel, options, station, setStation }) {
  const handleChange = (e) => {
    setStation(e.target.value);
  };

  return (
    <div className='select-form__container'>
      <label htmlFor='station'>Select {stationLabel} Station</label>
      <select id='station' value={station} onChange={handleChange}>
        <option value=''>-- Select Station --</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
