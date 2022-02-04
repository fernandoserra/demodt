export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';
export const GET_PLACEHOLDER = 'GET_PLACEHOLDER';

const API_URL  = 'https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca';
const API_URL2 = 'https://jsonplaceholder.typicode.com/todos/1';

export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log("=====")
            console.log(json)
            console.log("=====")
            if (json) {
                dispatch({
                    type: GET_CITIES,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getJsonplaceholder= () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL2, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            console.log("=====")
            console.log(json)
            console.log("=====")
            if (json) {
                dispatch({
                    type: GET_PLACEHOLDER,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
};