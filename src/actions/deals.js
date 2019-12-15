import connect from '@vkontakte/vk-connect'

export const DEALS_FETCH_REQUEST = 'DEALS_FETCH_REQUEST';
export const DEALS_FETCH_SUCCESS = 'DEALS_FETCH_SUCCESS';
export const DEALS_FETCH_ERROR = 'DEALS_FETCH_ERROR';

export function fetchDeals() {
    return async dispatch => {
        dispatch({
            type: DEALS_FETCH_REQUEST
        });

        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        console.log(data);

        fetch("http://astarott.beget.tech/" + data.id + "/acts", {mode: 'cors'})
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