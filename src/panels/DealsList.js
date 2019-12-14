import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import List from "@vkontakte/vkui/dist/components/List/List"
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell"
import PropTypes from 'prop-types';

class DealsList extends React.Component {
    render(){
        const {deals} = this.props;

        const Cells = deals.map(deal => {
            return <Cell expandable onClick={this.props.go} data-to="soloDeal" description={deal.description}>{deal.name}</Cell>
        });

        return(
            <React.Fragment>
                <Panel id={this.props.id}>
                    <PanelHeader
                        left={<HeaderButton onClick={this.props.go} data-to="home">
                            <Icon24Back/>
                        </HeaderButton>}
                    >
                        Оцени других
                    </PanelHeader>
                    <Group>
                        <List>
                            {Cells}
                        </List>
                    </Group>
                </Panel>
            </React.Fragment>
        )
    }
}

DealsList.propTypes = {
    deals: PropTypes.array,
};

export default DealsList;
