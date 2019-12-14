export const FRIENDS_FETCH_REQUEST = 'FRIENDS_FETCH_REQUEST';
export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS';
export const FRIENDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR';

const url ='http://localhost:3000/users/';

export function fetchFriends(arrayId) {
    return dispatch => {
        dispatch({
            type: FRIENDS_FETCH_REQUEST
        });

        let friends = [];
        arrayId.forEach(id => {
            fetch(url + id)
                .then(data => {
                    return data.json()
                }).then(friend => {
                    friends.push(friend)
                }).catch(e => {
                    dispatch({
                        type: FRIENDS_FETCH_ERROR,
                        payload: e
                    });
                    return;
                })
        });

        console.log(friends)

        dispatch({
            type: FRIENDS_FETCH_SUCCESS,
            payload: friends
        })
    }
}