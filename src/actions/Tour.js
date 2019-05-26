const TOURS_ENDPOINT = '/tours/';
const AVAILABLE_COUNTRIES_ENDPOINT = '/tours/available_countries/';

export const getTours = (country=null) => {
  let getToursUrl = TOURS_ENDPOINT;

  if (country) {
    getToursUrl = `${TOURS_ENDPOINT}?place__country__country_name=${country}`;
  }

  return {
    type: 'GET_TOURS',
    payload: {
      request: {
        url: getToursUrl,
      }
    }
  }
};

export const getAvailableCountries = () => {
  return {
    type: 'GET_AVAILABLE_COUNTRIES',
    payload: {
      request: {
        url: AVAILABLE_COUNTRIES_ENDPOINT,
      }
    }
  }
};
