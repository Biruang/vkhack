export const DEALS_FETCH_REQUEST = 'DEALS_FETCH_REQUEST';
export const DEALS_FETCH_SUCCESS = 'DEALS_FETCH_SUCCESS';
export const DEALS_FETCH_ERROR = 'DEALS_FETCH_ERROR';

export function fetchDeals() {
    return dispatch => {
        dispatch({
            type: DEALS_FETCH_REQUEST
        });

        fetch("http://localhost:3000/deals")
            .then(data => {
                return data.json()
            })
            .then(deals =>{
                console.log(deals);
                dispatch({
                    type: DEALS_FETCH_SUCCESS,
                    payload: deals
                })
            })
            .catch(e => {
                dispatch({
                    type: DEALS_FETCH_ERROR,
                    payload: e
                })
            })
    }
}