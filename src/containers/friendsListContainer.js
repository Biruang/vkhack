import React from 'react'
import { connect } from 'react-redux'
import ListFriends from "../components/listFriends";
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import {fetchFriends} from "../actions/friends";

class FriendsListContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            friends: this.props.friendsArray
        }
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    render(){
        return(
            <Group title="Рейтинг друзей" >
                <ListFriends arrayUsers={this.state.friends}/>
            </Group>
        )
    }
}

const mapStateToProps = store => ({
    friendsArray: store.friends.data,
});

const mapDispatchToProps = dispatch => ({
    fetchFriends: () => dispatch(fetchFriends())
});

export default connect(mapStateToProps,mapDispatchToProps)(FriendsListContainer)
