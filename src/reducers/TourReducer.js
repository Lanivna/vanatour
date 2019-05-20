const GET_TOURS_REQUEST = 'GET_TOURS';
const GET_TOURS_SUCCESS = 'GET_TOURS_SUCCESS';
const GET_TOURS_FAIL = 'GET_TOURS_FAIL';

export default (state = {
  loading: Boolean(true),
  error: null,
  tours: [],
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
    default:
      return state;
  }
}