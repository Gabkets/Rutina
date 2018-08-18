const initialState = {
  loading: false,
  iniConfiguration: 'hola'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'FETCH_FIREBASE':

      return {
        ...state,
        configuration: 'nothing'
      }
    default:
      return state
  }
}

export default reducer;
