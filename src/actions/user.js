import connect from '@vkontakte/vk-connect'

export const INIT_USER_REQUEST = 'INIT_USER_REQUEST';
export const INIT_USER_SUCCESS = 'INIT_USER_SUCCESS';
export const INIT_USER_ERROR = 'INIT_USER_ERROR';

let url = "http://localhost:3000/users/";

export function InitUser() {
    return async dispatch => {
        dispatch({
            type: INIT_USER_REQUEST,
        });

        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        let user = await fetch(url + data.id).then(data => {return data.json()});

        fetch(url + user.id)
            .then(data => {
                return data.json()
            }).then(user => {
                dispatch({
                    type: INIT_USER_SUCCESS,
                    payload: user
                });
            }).catch(e => {
                dispatch({
                    type: INIT_USER_ERROR,
                    payload: e,
                })
            })
    }
}