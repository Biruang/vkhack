import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types'
import StatisticListContainer from '../containers/StatisticListContainer'


class StatisticListPanel extends React.Component {
    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.go} data-to="home">
                        <Icon24Back/>
                    </HeaderButton>}
                >
                    Статистика
                </PanelHeader>

                <StatisticListContainer />
            </Panel>
        )
    }
}

StatisticListPanel.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
};
export default StatisticListPanel;