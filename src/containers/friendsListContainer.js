import React from 'react'
import { connect } from 'react-redux'
import ListFriends from "../components/listFriends";
import {FixedLayout} from "@vkontakte/vkui";
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import { fetchFriends } from "../actions/friends";

class FriendsListContainer extends React.Component{

    componentDidMount() {
        this.props.fetchFriends(this.props.userFriends)
    }

    render(){
        return(
            <Group title="Рейтинг друзей" >
                <FixedLayout vertical="bottom" style={{ height: 160, overflowY: 'scroll' }}>
                    <ListFriends arrayUsers={this.props.friendsArray}/>
                </FixedLayout>
            </Group>
        )
    }
}

const mapStateToProps = state => ({
    userFriends: state.user.friends,
    friendsArray: state.friends.data
});

const mapDispatchToProps = dispatch => ({
    fetchFriends: arrayId => dispatch(fetchFriends(arrayId))
});

export default connect(mapStateToProps,mapDispatchToProps)(FriendsListContainer)
