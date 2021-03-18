import * as types from '../constants/actionTypes';

// interface initialState {
//   currentSel: string
// }

const initialState = {
  currentSel: '',
}

const reducer = (state = initialState, action: any) => {
  // set up any sort of placeholder variables here


  // set up switch cases for each corresponding action type
  switch (action.type) {
    case types.SELECT_COUNTRY: {
      const newCountry = action.payload;
      // console.log('new country', newCountry)
      return {
        ...state,
       newCountry
      }
  }
    default: {
      return state;
    }
  }

}
export default reducer;