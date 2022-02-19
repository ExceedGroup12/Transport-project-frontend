import axios from 'axios';

export async function getStationById(id) {
  const response = await axios.get(
    `https://ecourse.cpe.ku.ac.th/exceed12/api/get-station/${id}`
  );
  return response.data;
}

export async function getRobotStatus() {
  const response = await axios.get(
    'https://ecourse.cpe.ku.ac.th/exceed12/api/get-robot-status'
  );
  return response.data;
}

export async function postStationData(start, end, jwtToken) {
  await axios.post(
    `https://ecourse.cpe.ku.ac.th/exceed12/api/update/location`,
    {
      ff: start,
      gg: end,
    },
    {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    }
  );
}
