import connect from '@vkontakte/vk-connect'

export const FRIENDS_FETCH_REQUEST = 'FRIENDS_FETCH_REQUEST';
export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS';
export const FRIENDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR';


const url ='http://localhost:3000/users/';

export function fetchFriends() {
    return async dispatch => {
        dispatch({
            type: FRIENDS_FETCH_REQUEST
        });

        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        let user = await fetch(url + data.id).then(data => {return data.json()});
        let arrayId = user.friends;

        console.log(arrayId);

        let friends = [];
        arrayId.forEach(id => {
             fetch(url + id)
                .then(data => {
                    return data.json()
                }).then(friend => {
                    console.log(friend);
                    friends.push(friend)
                }).catch(e => {
                    dispatch({
                        type: FRIENDS_FETCH_ERROR,
                        payload: e
                    });
                })
        });

        console.log(friends);

        dispatch({
            type: FRIENDS_FETCH_SUCCESS,
            payload: friends
        })
    }
}