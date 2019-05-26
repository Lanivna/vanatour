const GET_TOURS_REQUEST = 'GET_TOURS';
const GET_TOURS_SUCCESS = 'GET_TOURS_SUCCESS';
const GET_TOURS_FAIL = 'GET_TOURS_FAIL';
const GET_AVAILABLE_COUNTRIES_REQUEST = 'GET_AVAILABLE_COUNTRIES';
const GET_AVAILABLE_COUNTRIES_SUCCESS = 'GET_AVAILABLE_COUNTRIES_SUCCESS';
const GET_AVAILABLE_COUNTRIES_FAIL = 'GET_AVAILABLE_COUNTRIES_FAIL';

export default (state = {
  loading: Boolean(true),
  error: null,
  tours: [],
  availableCountries: [],
}, action) => {
  switch (action.type) {
    case GET_TOURS_REQUEST:
      return {
        ...state,
        loading: Boolean(true),
        error: null,
        tours: []
      };
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        loading: Boolean(false),
        error: null,
        tours: action.payload.data
      };
    case GET_TOURS_FAIL:
      return {
        ...state,
        error: action.error.response.status,
        loading: Boolean(false),
        tours: []
      };
    case GET_AVAILABLE_COUNTRIES_REQUEST:
      return {
        ...state,
        error: null,
        loading: Boolean(true),
        availableCountries: [],
      };
    case GET_AVAILABLE_COUNTRIES_SUCCESS:
      return {
        ...state,
        error: null,
        loading: Boolean(false),
        availableCountries: action.payload.data
      };
    case GET_AVAILABLE_COUNTRIES_FAIL:
      return {
        ...state,
        error: action.error.response.status,
        loading: Boolean(false),
        availableCountries: []
      };
    default:
      return state;
  }
}