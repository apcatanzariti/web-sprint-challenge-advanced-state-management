import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAIL = 'FETCHING_SMURFS_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => dispatch => {

    dispatch(fetchingSmurfs());

    axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
        dispatch(fetchSmurfsSuccess(res.data));
    })
    .catch((err) => {
        dispatch(fetchSmurfsFail(err));
    })
};

export const fetchingSmurfs = () => {
    return ({ type: FETCHING_SMURFS });
};

export const fetchSmurfsSuccess = (smurf) => {
    return ({ type: FETCHING_SMURFS_SUCCESS, payload: smurf });
};

export const fetchSmurfsFail = (error) => {
    return ({ type: FETCHING_SMURFS_FAIL, payload: 'Error fetching Smurfs :(' });
};

export const addSmurf = (smurf) => {
    return ({ type: ADD_SMURF, payload: smurf });
};

export const setError = (error) => {
    return ({ type: SET_ERROR, payload: error })
};

// http:/localhost:3333/smurfs

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.