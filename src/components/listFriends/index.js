import React from 'react';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import List from '@vkontakte/vkui/dist/components/List/List';
import  Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';
import PropTypes from 'prop-types';

function ListFriends(props){
        return (
            <List>
                {props.arrayUsers.map(({ id, first_name, last_name, photo, carma }, i) =>
                    <Cell key={i} before={<Avatar src={photo} />} indicator={<Counter type="primary">{carma}</Counter>}>{first_name} {last_name}</Cell>)}
            </List>
        )
}

ListFriends.propTypes = {
    arrayUsers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        photo: PropTypes.string,
        carma: PropTypes.number
      }))
};

export default ListFriends;