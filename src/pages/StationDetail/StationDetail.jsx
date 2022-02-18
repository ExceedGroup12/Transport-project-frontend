import { useParams } from 'react-router-dom';

export default function StationDetail() {
  const { station } = useParams();

  return (
    <div>
      <h1>Station {station}</h1>
    </div>
  );
}
