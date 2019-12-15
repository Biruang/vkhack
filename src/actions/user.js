export const INIT_USER_REQUEST = 'INIT_USER_REQUEST';
export const INIT_USER_SUCCESS = 'INIT_USER_SUCCESS';
export const INIT_USER_ERROR = 'INIT_USER_ERROR';

export function InitUser(id) {
    return dispatch => {
        dispatch({
            type: INIT_USER_REQUEST,
            payload: id
        });

        fetch("http://localhost:3000/users/" + id)
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