import axios from 'axios';

export async function getStationById(id) {
  const response = await axios.get(
    `https://ecourse.cpe.ku.ac.th/exceed12/api/get-station/${id}`
  );
  return response.data;
}
