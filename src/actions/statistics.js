export const FETCH_STATISTICS_REQUEST = 'FETCH_STATISTICS_REQUEST';
export const FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS';
export const FETCH_STATISTICS_ERROR = 'FETCH_STATISTICS_ERROR';

const url ='http://localhost:3000/statistics/';

export function fetchStatistics() {
    return dispatch => {
        dispatch({
            type: FETCH_STATISTICS_REQUEST
        });

        fetch(url)
            .then(data => {
                return  data.json();
            })
            .then(stat => {
                dispatch({
                    type: FETCH_STATISTICS_SUCCESS,
                    payload: stat
                })
            })
            .catch(e => {
                dispatch({
                    type: FETCH_STATISTICS_ERROR,
                    payload: e
                })
            })
    }
}