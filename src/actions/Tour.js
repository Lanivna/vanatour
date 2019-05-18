const TOURS_ENDPOINT = '/tours/';

export const getTours = () => {
  return {
    type: 'GET_TOURS',
    payload: {
      request: {
        url: TOURS_ENDPOINT,
      }
    }
  }
};
