import React from 'react'
import { connect } from 'react-redux'
import DealLists from "../components/dealsList";
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import {fetchDeals} from "../actions/deals";

class DealsListContainer extends React.Component{

    componentDidMount() {
        this.props.fetchDeals()
    }

    render(){
        return(
            <Group title="Дела друзей" >
                <DealLists deals={this.props.arrayUsers} />
            </Group>
        )
    }
}

const mapStateToProps = state => ({
    arrayUsers: state.deals.data,
});

const mapDispatchToProps = dispatch => ({
    fetchDeals: () => dispatch(fetchDeals())
});

export default connect(mapStateToProps, mapDispatchToProps)(DealsListContainer)