import connect from '@vkontakte/vk-connect'

export const FRIENDS_FETCH_REQUEST = 'FRIENDS_FETCH_REQUEST';
export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS';
export const FRIENDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR';


const url ='http://astarott.beget.tech/';
const app_id = 7246699;

export function fetchFriends() {
    return async dispatch => {
        dispatch({
            type: FRIENDS_FETCH_REQUEST
        });

        let data = await connect.sendPromise("VKWebAppGetUserInfo");
        console.log(data);
        let friends = await connect.send("VKWebAppGetFriends", {multi: true});
        console.log(friends);
        friends = { friends: friends};
        console.log(friends);
        friends = await fetch(url + data.id + '/friends/&is_new=0', {method: 'POST', body: JSON.stringify(friends)});
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

        let array = [

        ];

        dispatch({
            type: FRIENDS_FETCH_SUCCESS,
            payload: array
        })
    }
}