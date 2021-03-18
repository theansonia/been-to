/* eslint-disable arrow-body-style */
/* eslint-disable import/order */
import React, {  useEffect } from 'react';
import MapWrapper from "../components/MapContainer";
import { connect, useSelector, useDispatch} from 'react-redux';
import * as actions from '../actions/actions'
import * as types from '../constants/actionTypes';



// interface MapsContainerProps {
//   visited: string[];
//   setCurrentSel: (code: string) => void;
//   setVisited: (codes: string[]) => void;
//   currentUser: string;
//   setShowForm: (code: boolean) => void;
// }


const mapStateToProps = (state: any) => ({
  currentSel: state.currentSel,
});

const mapDispatchToProps = (dispatch: any) => ({
  currentSel: (country: string) => {dispatch(actions.currentSel(country))}
});

const MapsContainer = ( {visited, setVisited, currentUser, setCurrentSel,
   setShowForm}: any) => {
     let country = 'empty string'
      // const store = useSelector(state => state.currentSel)
    const dispatch = useDispatch()


    useEffect(() => {
      country = useSelector(state => state.currentSel)
      // console.log('this is the state', state)

    }, [])
    
    // console.log('this is currentSel', currentSel)

    useEffect(() => {
      dispatch({
        type: types.SELECT_COUNTRY,
        payload: 'iraq'
      })
    }, [])

    console.log('this is the country', country)
    
    return (
      <MapWrapper
        visited={visited}
        setVisited={setVisited}
        currentUser={currentUser}
        setCurrentSel={setCurrentSel}
        setShowForm={setShowForm} 
      />

    );
  }
  export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);