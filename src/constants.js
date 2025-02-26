export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.486574',
      bl_lng: '25.402636',
      tr_lat: '42.625037',
      tr_lng: '42.686009',
      limit: '300'
    },
    headers: {
      'x-rapidapi-key': 'be4ee6d2aamsh8e352997640caa9p1e01fdjsn74eaa483ad5e',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };

export  const detailOpt = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
    params: {flight: null},
    headers: {
      'x-rapidapi-key': 'be4ee6d2aamsh8e352997640caa9p1e01fdjsn74eaa483ad5e',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };