import React from 'react'
import { connect } from 'react-redux'
import ListFriends from "../components/listFriends";
import {FixedLayout} from "@vkontakte/vkui";
import Group from '@vkontakte/vkui/dist/components/Group/Group';

class FriendsListContainer extends React.Component{
    render(){
        return(
            <Group title="Рейтинг друзей" >
                <FixedLayout vertical="bottom" style={{ height: 160, overflowY: 'scroll' }}>
                    <ListFriends arrayUsers={this.props.arrayUsers}/>
                </FixedLayout>
            </Group>
        )
    }
}

const mapStateToProps = state => ({
    arrayUsers: state.friends
});

export default connect(mapStateToProps)(FriendsListContainer)
