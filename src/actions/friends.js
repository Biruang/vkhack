import connect from '@vkontakte/vk-connect'

export const FRIENDS_FETCH_REQUEST = 'FRIENDS_FETCH_REQUEST';
export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS';
export const FRIENDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR';


const url ='http://astarott.beget.tech/friends/';
const app_id = 7246699;

export function fetchFriends() {
    return async dispatch => {
        dispatch({
            type: FRIENDS_FETCH_REQUEST
        });

        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        console.log(data);
        let friends = await connect.sendPromise("VKWebAppGetFriends");
        friends = friends.data.users;
        console.log(friends);
        friends = await fetch(url + data.id + '&is_new=false', {method: 'POST', body: JSON.stringify(friends)});
        console.log(friends);

        friends.forEach(id => {
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