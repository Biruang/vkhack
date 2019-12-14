import React from 'react'
import { connect } from 'react-redux'
import DealLists from "../components/dealsList";
import Group from '@vkontakte/vkui/dist/components/Group/Group';

class DealsListContainer extends React.Component{
    render(){
        return(
            <Group title="Дела друзей" >
                <DealLists deals={this.props.arrayUsers} />
            </Group>
        )
    }
}

const mapStateToProps = state => ({
    arrayUsers: state.deals,
});

export default connect(mapStateToProps)(DealsListContainer)