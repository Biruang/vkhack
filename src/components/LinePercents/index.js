import React from 'react';
import './style.css'
import { Group, Div, InfoRow, Progress } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

class LinePercents extends React.Component {
 
    render() {
        return(
            <Group>
                <Div>
                <InfoRow title="По очкам">
                    <Progress value={this.props.perPoints*100/this.props.allPoints} />
                </InfoRow>
            </Div>  
            <Div>
                <InfoRow title="По поступкам">
                    <Progress value={this.props.goodDeals*100/this.props.allDeals} />
                </InfoRow>
            </Div>
            </Group>

        )
    }
}

LinePercents.propTypes = {
    perPoints: PropTypes.number,
    allPoints: PropTypes.number,
    goodDeals: PropTypes.number,
    allDeals: PropTypes.number
};

export default LinePercents;