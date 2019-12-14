import React from 'react';
import Period from '../Period/index';
import LinePercents from '../LinePercents/index';
import PerDeals from '../perDeals/index';
import PropTypes from 'prop-types'

class StatisticList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            allPoints: 0,
            perPoints: 0,
            arrayDeals:  [],
            goodDeals: 0
        };
        this.updatePeriod = this.updatePeriod.bind(this);
        this.filterDeals = this.filterDeals.bind(this);
    }

    componentDidMount() {
        this.updatePeriod(0);
    }

    filterDeals(arr, p) {
        var d = new Date();
        var first = new Date();
        var last = new Date();
        last.setHours(23,59,59,999);
        if (p === 0) {
            first.setHours(0,0,0,0);
        } else if (p === 1) {
            var dWeek = d.getDate() - d.getDay() + (d.getDay() === 0 ? -6:1);
            first.setDate(dWeek);
        } else if (p === 2) {
            first = new Date(new Date().setDate(d.getDate()-30));
        } else if (p === 3) {
            first = new Date(new Date().setMonth(d.getMonth() - 12));
        }
        var ar = arr.filter(a => a.date >= first && a.date <= last);
        this.setState({arrayDeals: ar});
        var count = 0;
        for(var i = 0; i < ar.length; i++) {
            if (arr[i].type === 'good') {
                count ++;
            }
        }
        this.setState({goodDeals: count});
    }

    updatePoints(all, pos) {
        this.setState({allPoints: all});
        this.setState({perPoints: pos});
    }

    updatePeriod(per) {
        switch(per) {
            case 0:
                this.updatePoints(this.props.day_allPoints, this.props.day_positive);
                this.filterDeals(this.props.history, per);
                break;
            case 1:
                this.updatePoints(this.props.week_allPoints, this.props.week_positive);
                this.filterDeals(this.props.history, per);
                break;
            case 2:
                this.updatePoints(this.props.month_allPoints, this.props.month_positive);
                this.filterDeals(this.props.history, per);
                break;
            case 3:
                this.updatePoints(this.props.year_allPoints, this.props.year_positive);
                this.filterDeals(this.props.history, per);
                break;
        }
    }

    render() {
        console.log(this.props.history)
        return (
            <React.Fragment>
                <Period updatePeriod={this.updatePeriod}/>
                <LinePercents
                    allPoints={this.state.allPoints}
                    perPoints={this.state.perPoints}
                    allDeals={this.state.arrayDeals.length}
                    goodDeals={this.state.goodDeals}
                />
                <PerDeals arrayDeals={this.state.arrayDeals} />
            </React.Fragment>
        )
    }
}

StatisticList.propTypes = {
    day_allPoints:PropTypes.number,
    week_allPoints:PropTypes.number,
    month_allPoints:PropTypes.number,
    year_allPoints:PropTypes.number,
    day_positive:PropTypes.number,
    week_positive:PropTypes.number,
    month_positive:PropTypes.number,
    year_positive:PropTypes.number,
    history:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        date: PropTypes.Date,
        type: PropTypes.string,
        karma: PropTypes.number
    }))
};
export default StatisticList;