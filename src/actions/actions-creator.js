export const types = {
  FETCH_FIREBASE: 'FETCH_FIREBASE'
};

export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const fetchFirebase = () => dispatch => {
  dispatch({
    type: types.FETCH_FIREBASE,
    payload: 'Name'
  })
}
