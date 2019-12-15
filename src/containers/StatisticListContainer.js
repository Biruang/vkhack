import React from 'react'
import { connect as rconnect} from 'react-redux'
import connect from '@vkontakte/vk-connect';
import StatisticList from "../components/Statistic";
import { fetchStatistics } from '../actions/statistics'

class StatisticListContainer extends React.Component{

    componentDidMount() {
    }

    render(){
        const {} = this.props;
        return(
            <StatisticList {...this.props}/>
        )
    }
}

const mapStateToProps = store => ({
    day_allPoints: store.statistics.data.day_allPoints,
    week_allPoints: store.statistics.data.week_allPoints,
    month_allPoints: store.statistics.data.month_allPoints,
    year_allPoints: store.statistics.data.year_allPoints,
    day_positive: store.statistics.data.day_positive,
    week_positive: store.statistics.data.week_positive,
    month_positive: store.statistics.data.month_positive,
    year_positive: store.statistics.data.year_positive,
    history: store.statistics.data.history
});

const mapDispatchToProps = dispatch => ({
    fetchStatistics: () => dispatch(fetchStatistics())
});

export default rconnect(mapStateToProps, mapDispatchToProps)(StatisticListContainer)
